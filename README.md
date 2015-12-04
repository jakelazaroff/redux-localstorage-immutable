# redux-localstorage-immutable

[![npm version](https://badge.fury.io/js/redux-localstorage-immutable.svg)](https://badge.fury.io/js/redux-localstorage-immutable)

Enhancer for redux-localstorage that allows you to persist an immutable store. 

## Installation

```
npm install --save redux-localstorage-immutable
```

## Usage

```javascript
import { serialize, deserialize } from 'redux-localstorage-immutable';

const reducers = compose(
  mergePersistedState(deserialize)
)(reducers);

const storage = compose(
  serialize
)(adapter(window.localStorage));
```

## Methods

### deserialize (state, payload)

Merges `payload` into `state` and returns the resulting Immutable. Used to take the JSON string from local storage and merge it into the store.

### serialize (storage)

Adds a `put` that converts the state to a JavaScript object and passes the storage object along. Used to prepare your Immutable for local storage. Probably should go before any other enhancers, unless they're expecting an Immutable rather than a plan JavaScript object.

## Thanks

Cheers to [redux-localstorage](https://github.com/elgerlambert/redux-localstorage) and [redux-immutablejs](https://github.com/indexiatech/redux-immutablejs)!
