import { call, put, takeLatest, all, takeEvery } from 'redux-saga/effects'

function getAccounts(web3) {
  return web3.eth.getAccounts().then((accounts) => {
    return accounts
  })
}

function getBalance(account, web3) {
  return web3.eth.getBalance(account).then((balance) => {
    return { [account]: balance }
  })
}

function* callGetAccounts(action) {
  const accounts = yield call(getAccounts, action.web3)

  if (!accounts) {
    console.error('No accounts found!')
    yield call(action.reject, {source: 'accounts', message: 'Failed to get accounts.'})
  }

  yield put({type: 'ACCOUNTS_FETCHED', accounts})

  yield call(action.resolve)
}

function* callGetBalances(action) {
  try {
  if (!action.accounts || !action.accounts.length) {
    console.error('No accounts')
    return;
  }
  const balances = yield all(action.accounts.map(account => {
    return callGetAccountBalance({ ...action, account })
  }))
  } catch (err) {
    console.log(err);
  }
}

function* callGetAccountBalance(action) {
  try {
    const balance = yield call(getBalance, action.account, action.web3)
    yield put({type: 'ACCOUNT_BALANCE_FETCHED', balance})
  } catch (err) {
    console.log(err);
  }
}

function* accountsSaga() {
  yield takeLatest('ACCOUNTS_FETCHING', callGetAccounts)
  yield takeLatest('GET_BALANCES', callGetBalances)
  yield takeEvery('GET_ACCOUNT_BALANCE', callGetAccountBalance)
}

export default accountsSaga;
