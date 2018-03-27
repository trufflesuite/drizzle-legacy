import { call, put, select, takeLatest, takeEvery, all } from 'redux-saga/effects'

function getBalance(account, web3) {
  return web3.eth.getBalance(account).then((balance) => {
    return { [account]: balance }
  })
}

export function* getAccountBalances(action) {
  const accounts = yield select(getAccountsState)
  const web3 = action.web3

  if (!accounts) {
    console.error('No accounts found while attempting to fetch balances!')
  }

  try {
    for (var i in accounts) {
      var account = accounts[i]
      yield getSingleAccountBalance({ ...action, account })
    }
  }
  catch (error) {
    yield put({type: 'ACCOUNT_BALANCE_FAILED', error})
    console.error('Error fetching account balance:')
    console.error(error)
  }

  yield put({type: 'ACCOUNT_BALANCES_FETCHED'})
}

function* getSingleAccountBalance(action) {
  try {
    var account = action.account;
    var accountBalance = yield call(action.web3.eth.getBalance, account)
    yield put({type: 'ACCOUNT_BALANCE_FETCHED', account, accountBalance})
  } catch (err) {
    console.log(err);
  }
}

const getAccountsState = (state) => state.accounts

function* accountBalancesSaga() {
  yield takeLatest('ACCOUNT_BALANCES_FETCHING', getAccountBalances)
  yield takeEvery('GET_ACCOUNT_BALANCE', getSingleAccountBalance)
}

export default accountBalancesSaga;