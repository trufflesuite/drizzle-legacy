import { END, eventChannel } from 'redux-saga'
import { call, put, select, take, takeLatest, takeEvery } from 'redux-saga/effects'

/*
 * Events
 */

function createContractEventChannel({contract, eventName}) {
  const contractAddress = contract.address

  return eventChannel(emit => {
    const eventListener = contract.events[eventName]().on('data', event => {
      emit({type: 'EVENT_FIRED', contractAddress, event})
    })
    .on('changed', event => {
      emit({type: 'EVENT_CHANGED', contractAddress, event})
    })
    .on('error', error => {
      emit({type: 'EVENT_ERROR', contractAddress, error})
      emit(END)
    })

    const unsubscribe = () => {
      eventListener.removeListener(eventName)
    }

    return unsubscribe
  })
}

function* callListenForContractEvent({contract, eventName}) {
  const contractEventChannel = yield call(createContractEventChannel, {contract, eventName})

  while (true) {
    var event = yield take(contractEventChannel)
    yield put(event)
  }
}

/*
 * Send and Cache
 */

function createTxChannel({txObject, stackId, sendArgs = {}, contractAddress}) {
  var persistTxHash

  return eventChannel(emit => {
    const txPromiEvent = txObject.send(sendArgs).on('transactionHash', txHash => {
      persistTxHash = txHash

      emit({type: 'TX_BROADCASTED', txHash, stackId})
      emit({type: 'CONTRACT_SYNC_IND', contractAddress})
    })
    .on('confirmation', (confirmationNumber, receipt) => {
      emit({type: 'TX_CONFIRMATION', confirmationReceipt: receipt, txHash: persistTxHash})
    })
    .on('receipt', receipt => {
      emit({type: 'TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash})
      emit(END)
    })
    .on('error', error => {
      emit({type: 'TX_ERROR', error: error, txHash: persistTxHash})
      emit(END)
    })

    const unsubscribe = () => {
      txPromiEvent.off()
    }

    return unsubscribe
  })
}

function* callSendContractTx({contract, fnName, fnIndex, args, stackId}) {
  // Check for type of object and properties indicative of call/send options.
  const finalArg = args[args.length - 1]
  var sendArgs = {}
  var finalArgTest = call(isSendOrCallOptions, finalArg)

  if (typeof finalArg === 'object' && finalArgTest) {
    sendArgs = finalArg

    delete args[args.length - 1]
    args.length = args.length - 1
  }

  // Get address to mark as desynchronized on tx creation
  const contractAddress = contract.address

  // Create the transaction object and execute the tx.
  const txObject = yield call(contract.methods[fnName], ...args)
  const txChannel = yield call(createTxChannel, {txObject, stackId, sendArgs, contractAddress})

  try {
    while (true) {
      var event = yield take(txChannel)
      yield put(event)
    }
  } finally {
    txChannel.close()
  }
}

/*
 * Call and Cache
 */

function* callCallContractFn({contract, fnName, fnIndex, args, argsHash}) {
  // Check for type of object and properties indicative of call/send options.
  const finalArg = args[args.length - 1]
  var callArgs = {}
  var finalArgTest = call(isSendOrCallOptions, finalArg)

  if (typeof finalArg === 'object' && finalArgTest) {
    callArgs = finalArg

    delete args[args.length - 1]
    args.length = args.length - 1
  }

  // Create the transaction object and execute the call.
  const txObject = yield call(contract.methods[fnName], ...args)

  try {
    const callResult = yield call(txObject.call, callArgs)

    var dispatchArgs = {
      contractAddress: contract.address,
      variable: contract.abi[fnIndex].name,
      argsHash: argsHash,
      args: args,
      value: callResult,
      fnIndex: fnIndex
    }

    yield put({type: 'GOT_CONTRACT_VAR', ...dispatchArgs})
  }
  catch (error) {
    console.error(error)

    var errorArgs = {
      contractAddress: contract.address,
      variable: contract.abi[fnIndex].name,
      argsHash: argsHash,
      args: args,
      error: error,
      fnIndex: fnIndex
    }

    yield put({type: 'ERROR_CONTRACT_VAR', ...errorArgs})
  }
}

/*
 * Sync Contract
 */

function* callSyncContract(action) {
  // Get contract state from store
  const contract = action.contract
  const contractName = contract.contractArtifact.contractName

  const contractsState = yield select(getContractsState)
  var contractFnsState = Object.assign({}, contractsState[contractName])

  // Remove unecessary keys
  delete contractFnsState.initialized
  delete contractFnsState.synced
  delete contractFnsState.events

  // Iterate over functions and hashes
  for (var fnName in contractFnsState)
  {
    for (var argsHash in contractFnsState[fnName])
    {
      const fnIndex = contractFnsState[fnName][argsHash].fnIndex
      const args = contractFnsState[fnName][argsHash].args

      // Pull args and call fn for each given function
      yield put({type: 'CALL_CONTRACT_FN', contract, fnName, fnIndex, args, argsHash})
    }
  }

  // When complete, dispatch CONTRACT_SYNCED
  yield put({type: 'CONTRACT_SYNCED', contractName})
}

const getContractsState = (state) => state.contracts

function isSendOrCallOptions(options) {
  if ('from' in options) return true
  if ('gas' in options) return true
  if ('gasPrice' in options) return true
  if ('value' in options) return true

  return false
}

function* contractsSaga() {
  yield takeEvery('SEND_CONTRACT_TX', callSendContractTx)
  yield takeEvery('CALL_CONTRACT_FN', callCallContractFn)
  yield takeEvery('CONTRACT_SYNCING', callSyncContract)
  yield takeEvery('LISTEN_FOR_EVENT', callListenForContractEvent)
}

export default contractsSaga;
