const ACCOUNTS_FETCHING = 'ACCOUNTS_FETCHING'

export function accountsFetching(results) {
  return {
    type: ACCOUNTS_FETCHING,
    payload: results
  }
}

const ACCOUNTS_FETCHED = 'ACCOUNTS_FETCHED'

export function accountsFetched(results) {
  return {
    type: ACCOUNTS_FETCHED,
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

const BALANCES_FETCHED = 'BALANCES_FETCHED'

export function balcnesFetched(results) {
  return {
    type: BALANCES_FETCHED,
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