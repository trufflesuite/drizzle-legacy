const initialState = {
  ids: [],
  balances: {}
}

const accountsReducer = (state = initialState, action) => {
  if (action.type === 'ACCOUNTS_FETCHING')
  {
    return state
  }

  if (action.type === 'ACCOUNTS_FETCHED')
  {
    return Object.assign({}, state, { ids: action.accounts })
  }

  if (action.type === 'BALANCES_FETCHED')
  {
    let balances = {};
    action.balances.forEach(balance => balances = { ...balances, ...balance })
    return Object.assign({}, state, { balances: balances })
  }

  if (action.type === 'ACCOUNT_BALANCE_FETCHED')
  {
    return Object.assign({}, state,
      {
        balances: {
          ...state.balances,
          ...action.balance
        }
      })
  }

  return state

}

export default accountsReducer
