<div style="text-align: center"><img src="https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-logomark.png?raw=true" alt="Drizzle Logo" /></div>

# drizzle

`npm install --save drizzle`

Drizzle is a collection of front-end libraries that make writing dapp frontends easier and more predictable. The core of Drizzle is based on a Redux store, so you have access to the spectacular development tools around Redux. We take care of synchronizing your contract data, transaction data and more. Things stay fast because you declare what to keep in sync.
*   Fully reactive contract data, including state, events and transactions.
*   Declarative, so you're not wasting valuable cycles on uneeded data.
*   Maintains access to underlying functionality. Web3 and your contract's methods are still there, untouched.

**Using React?**: The easiest way to get started with Drizzle is to use our [official `drizzle-react` package](https://github.com/trufflesuite/drizzle-react) and (optionally) its companion [`drizzle-react-components`](https://github.com/trufflesuite/drizzle-react-components).

## Getting Started

**Note**: Since Drizzle uses web3 1.0 and web sockets, be sure your development environment can support these.

1. Import the provider.
   ```javascript
   import { Drizzle, generateStore } from 'drizzle'
   ```

1. Create an `options` object and pass in the desired contract artifacts for Drizzle to instantiate. Other options are available, see [the Options section](#options) below.
   ```javascript
   // Import contracts
   import SimpleStorage from './../build/contracts/SimpleStorage.json'
   import TutorialToken from './../build/contracts/TutorialToken.json'

   const options = {
     contracts: [
       SimpleStorage
     ]
   }

   const drizzleStore = generateStore(this.props.options)
   const drizzle = new Drizzle(this.props.options, drizzleStore)
   ```

1. Get contract data. Calling the `cacheCall()` function on a contract will execute the desired call and return a corresponding key so the data can be retrieved from the store. When a new block is received, Drizzle will refresh the store automatically _if_ any transactions in the block touched our contract. For more information on how this works, see [How Data Stays Fresh](#how-data-stays-fresh).

   **Note:** We have to check that Drizzle is initialized before fetching data. A simple if statement such as below is fine for display a few pieces of data, but a better approach for larger dapps is to use a [loading component](https://github.com/trufflesuite/drizzle-react#recipe-loading-component). We've already built one for you in our [`drizzle-react-components` library](https://github.com/trufflesuite/drizzle-react-components) as well.
   ```javascript
   // Assuming we're observing the store for changes.
   var state = drizzle.store.getState()

   // If Drizzle is initialized (and therefore web3, accounts and contracts), continue.
   if (state.drizzleStatus.initialized) {
    // Declare this call to be cached and synchronized. We'll receive the store key for recall.
    const dataKey = drizzle.contracts.SimpleStorage.methods.storedData.cacheCall()

    // Use the dataKey to display data from the store.
    return state.contracts.SimpleStorage.methods.storedData[dataKey].value
   }

   // If Drizzle isn't initialized, display some loading indication.
   return 'Loading...'
   ```

   The contract instance has all of its standard web3 properties and methods. For example, you could still call as normal if you don't want something in the store:
   ```javascript
   drizzle.contracts.SimpleStorage.methods.storedData().call()
   ```

1. Send a contract transaction. Calling the `cacheSend()` function on a contract will send the desired transaction and return a corresponding transaction hash so the status can be retrieved from the store. The last argument can optionally be an options object with the typical from, gas and gasPrice keys. Drizzle will update the transaction's state in the store (pending, success, error) and store the transaction receipt. For more information on how this works, see [How Data Stays Fresh](#how-data-stays-fresh).

   **Note:** We have to check that Drizzle is initialized before fetching data. A simple if statement such as below is fine for display a few pieces of data, but a better approach for larger dapps is to use a [loading component](https://github.com/trufflesuite/drizzle-react#recipe-loading-component). We've already built one for you in our [`drizzle-react-components` library](https://github.com/trufflesuite/drizzle-react-components) as well.
   ```javascript
   // Assuming we're observing the store for changes.
   var state = drizzle.store.getState()

   // If Drizzle is initialized (and therefore web3, accounts and contracts), continue.
   if (state.drizzleStatus.initialized) {
    // Declare this transaction to be observed. We'll receive the stackId for reference.
    const stackId = drizzle.contracts.SimpleStorage.methods.set.cacheSend(2, {from: '0x3f...'})

    // Use the dataKey to display the transaction status.
    if (state.transactionStack[stackId]) {
      const txHash = state.transactionStack[stackId]

      return state.transactions[txHash].status
    }
   }

   // If Drizzle isn't initialized, display some loading indication.
   return 'Loading...'
   ```

   For more information on what's contained in transaction state, see [Drizzle State](#drizzle-state).

   The contract instance has all of its standard web3 properties and methods. For example, you could still send as normal if you don't want a tx in the store:
   ```javascript
   drizzle.contracts.SimpleStorage.methods.set(2).send({from: '0x3f...'})
   ```

## Options

```javascript
{
  contracts,
  events: {
    contractName: [
      eventName
    ]
  },
  web3: {
    ignoreMetamask, 
    fallback: {
      type
      url
    }
  }
}
```
### `contracts` (array, required)
An array of contract artifact files.

### `events` (object)
An object consisting of contract names each containing an array of strings of the event names we'd like to listen for and sync with the store.

### `web3` (object)
Options regarding `web3` instantiation.

#### `ignoreMetamask` (Boolean)
If true Drizzle will ignore any injected web3 provider (including Metamask) that is present in the window context. Defaults to false. 

#### `fallback` (object)
An object consisting of the type and url of a fallback web3 provider. This is used if no injected provider, such as MetaMask or Mist, is detected.

`type` (string): The type of web3 fallback, currently `ws` (web socket) is the only possibility.

`url` (string): The full websocket url. For example: `ws://127.0.0.1:8546`.

## Drizzle State

```javascript
{
  accounts,
  contracts: {
    contractName: {
      initialized,
      synced,
      events,
      callerFunctionName: {
        argsHash: {
          args,
          value
        }
      }
    }
  },
  transactions: {
    txHash: {
      confirmations,
      error,
      receipt,
      status
    }
  },
  transactionStack
  drizzleStatus: {
    initialized
  }
  web3: {
    status
  }
}
```

### `accounts` (array)
An array of account addresses from `web3`.

### `contracts` (object)
A series of contract state objects, indexed by the contract name as declared in its ABI.

#### `contractName` (object)

`initialized` (boolean): `true` once contract is fully instantiated.
`synced` (boolean): `false` if contract state changes have occurred in a block and Drizzle is re-running its calls.

`events` (array): An array of event objects. Drizzle will only listen for the events we declared in options.

The contract's state also includes the state of each constant function called on the contract (`callerFunctionName`). The functions are indexed by name, and contain the outputs indexed by a hash of the arguments passed during the call (`argsHash`). If no arguments were passed, the hash is `0x0`. Drizzle reads from the store for you, so it should be unnecessary to touch this data cache manually.

`args` (array): Arguments passed to function call.
`value` (mixed): Value returned from function call.

### `transactions` (object)
A series of transaction objects, indexed by transaction hash.

#### `txHash` (object)

`confirmations` (array): After the initial receipt, further confirmation receipts (up to the 24th).
`error` (object): contains the returned error if any.
`receipt` (object): contains the first transaction receipt received from a transaction's `success` event.

`status` (string): `true` or `false` depending on transaction status
*   `pending` when the transaction has broadcasted successfully, but is not yet mined
*   `success` when a transaction receipt has been received (you may also wish to check for further confirmations)
*   `error` if any errors occurred after broadcasting

For more in-depth information on the Ethereum transaction lifecycle, [check out this great blog post](https://medium.com/blockchannel/life-cycle-of-an-ethereum-transaction-e5c66bae0f6e).

### `transactionStack` (array)
In some cases, a transaction may be malformed and not even make it to being broadcasted. To keep track of this, an empty string will be added to this array and replaced with the transaction hash once broascasted. The `cacheSend()` method will return a `stackId`, which will allow you to observe this process for your own transaction status indicator UI.

### `drizzleStatus` (object)
An object containing information about the status of Drizzle.

#### `initialized` (boolean): `true` once:
*   `web3` is found or instantiated
*   Account addresses are stored in state
*   All contracts are instantiated

### `web3` (object)

`status` (string): `initializing`, `initialized` and `failed` are possible options. Useful for triggering warnings if `web3` fails to instantiate.

## How Data Stays Fresh

1. Once initialized, Drizzle instantiates `web3` and our desired contracts, then observes the chain by subscribing to new block headers.

   ![Drizzle Sync Step 1](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync1.png?raw=true)

1. Drizzle keeps track of contract calls so it knows what to synchronize.

   ![Drizzle Sync Step 2](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync2.png?raw=true)

1. When a new block header comes in, Drizzle checks that the block isn't pending, then goes through the transactions looking to see if any of them touched our contracts.

   ![Drizzle Sync Step 3](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync3.png?raw=true)

1. If they did, we replay the calls already in the store to refresh any potentially altered data. If they didn't we continue with the store data.

   ![Drizzle Sync Step 4](https://github.com/trufflesuite/drizzle/blob/master/readme/drizzle-sync4.png?raw=true)
