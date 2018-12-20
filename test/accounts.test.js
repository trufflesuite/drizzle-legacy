import { getAccounts } from '../src/accounts/accountsSaga';
import Ganache from 'ganache-cli';
import Web3 from 'web3';
import { runSaga } from 'redux-saga';
//import configureStore from 'redux-mock-store';

var web3;

var dispatchedActions;
var store;

beforeAll(() => {
  //provider = Ganache.provider({seed: "drizzle", gasLimit: 7000000});
  web3 = new Web3('http://127.0.0.1:7545');

  dispatchedActions = [];
  store = {
    getState: () => ({}),
    dispatch: action => dispatchedActions.push(action)
  };
});

test('gets accounts', async function() {
  await runSaga(store, getAccounts, { web3 }).done;

  expect(dispatchedActions[0]['accounts'].length).toEqual(10);
});