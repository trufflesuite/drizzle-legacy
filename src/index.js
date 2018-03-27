import Drizzle from './Drizzle.js'
import generateStore from './generateStore'

// Reducers
import accountsReducer from './accounts/accountsReducer'
import accountBalancesReducer from './accountBalances/accountBalancesReducer'
import contractsReducer from './contracts/contractsReducer'
import drizzleStatusReducer from './drizzleStatus/drizzleStatusReducer'
import transactionsReducer from './transactions/transactionsReducer'
import transactionStackReducer from './transactions/transactionStackReducer'
import web3Reducer from './web3/web3Reducer'

const drizzleReducers = {
  accounts: accountsReducer,
  accountBalances: accountBalancesReducer,
  contracts: contractsReducer,
  drizzleStatus: drizzleStatusReducer,
  transactions: transactionsReducer,
  transactionStack: transactionStackReducer,
  web3: web3Reducer
}

// Sagas
import accountsSaga from './accounts/accountsSaga'
import accountBalancesSaga from './accountBalances/accountBalancesSaga'
import contractsSaga from './contracts/contractsSaga'

const drizzleSagas = [
  accountsSaga,
  accountBalancesSaga,
  contractsSaga,
]

export {
  Drizzle,
  generateStore,
  drizzleReducers,
  drizzleSagas
}