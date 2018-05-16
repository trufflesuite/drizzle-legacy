import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
const BlockTracker = require('eth-block-tracker')

/*
 * Listen for Blocks
 */

function createBlockChannel({drizzle, web3}) {
  return eventChannel(emit => {
    const blockEvents = web3.eth.subscribe('newBlockHeaders', (error, result) => {
      if (error)
      {
        emit({type: 'BLOCKS_FAILED', error})

        console.error('Error in block header subscription:')
        console.error(error)

        emit(END)
      }
    })
    .on('data', (blockHeader) => {
      emit({type: 'BLOCK_RECEIVED', blockHeader, drizzle, web3})
    })
    .on('error', error => {
      emit({type: 'BLOCKS_FAILED', error})
      emit(END)
    })

    const unsubscribe = () => {
      blockEvents.off()
    }

    return unsubscribe
  })
}

function* callCreateBlockChannel({drizzle, web3}) {
  const blockChannel = yield call(createBlockChannel, {drizzle, web3})

  try {
    while (true) {
      var event = yield take(blockChannel)
      yield put(event)
    }
  } finally {
    blockChannel.close()
  }
}

/*
 * Poll for Blocks
 */

function createBlockPollChannel({drizzle, interval, web3}) {
  return eventChannel(emit => {
    const blockTracker = new BlockTracker({ provider: web3.currentProvider, pollingInterval: interval})

    blockTracker.on('latest', (block) => {
      emit({type: 'BLOCK_FOUND', block, drizzle, web3})
    })

    blockTracker
    .start()
    .catch((error) => {
      emit({type: 'BLOCKS_FAILED', error})
      emit(END)
    })

    const unsubscribe = () => {
      blockTracker.stop()
    }

    return unsubscribe
  })
}

function* callCreateBlockPollChannel({drizzle, interval, web3}) {
  const blockChannel = yield call(createBlockPollChannel, {drizzle, interval, web3})

  try {
    while (true) {
      var event = yield take(blockChannel)
      yield put(event)
    }
  } finally {
    blockChannel.close()
  }
}

/*
 * Process Blocks
 */

function* processBlockHeader({blockHeader, drizzle, web3}) {
  const blockNumber = blockHeader.number

  try {
    const block = yield call(web3.eth.getBlock, blockNumber, true)

    yield call(processBlock, {block, drizzle, web3})
  }
  catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({type: 'BLOCK_FAILED', error})

    return
  }
}

function* processBlock({block, drizzle, web3}) {
  try {
    const txs = block.transactions

    if (txs.length > 0)
    {
      // Loop through txs looking for contract address
      for (var i = 0; i < txs.length; i++)
      {
        var from = txs[i].from || ''
        var fromContract = drizzle.findContractByAddress(from.toLowerCase())
        if (fromContract) {
          yield put({type: 'CONTRACT_SYNCING', contract: fromContract})
        }

        var to = txs[i].to || ''
        var toContract = drizzle.findContractByAddress(to.toLowerCase())
        if (toContract) {
          yield put({type: 'CONTRACT_SYNCING', contract: toContract})
        }
      }
    }
  }
  catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({type: 'BLOCK_FAILED', error})

    return
  }
}

function* blocksSaga() {
  // Block Subscriptions
  yield takeLatest('BLOCKS_LISTENING', callCreateBlockChannel)
  yield takeEvery('BLOCK_RECEIVED', processBlockHeader)

  // Block Polling
  yield takeLatest('BLOCKS_POLLING', callCreateBlockPollChannel)
  yield takeEvery('BLOCK_FOUND', processBlock)
}

export default blocksSaga
