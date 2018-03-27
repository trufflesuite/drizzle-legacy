const ACCOUNT_BALANCE_FETCHED = 'ACCOUNT_BALANCE_FETCHED'

export function accountBalanceFetched(results) {
  return {
    type: ACCOUNT_BALANCE_FETCHED,
    payload: results
  }
}

const GET_BALANCES = 'GET_BALANCES'

export function getBalances(results) {
  return {
    type: GET_BALANCES,
    payload: results
  }
}


const GET_ACCOUNT_BALANCE = 'GET_ACCOUNT_BALANCE'

export function getAccountBalance(results) {
  return {
    type: GET_ACCOUNT_BALANCE,
    payload: results
  }
}