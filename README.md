# redux-localstorage-immutable

[![npm](https://img.shields.io/npm/v/redux-localstorage-immutable.svg?style=flat-square)]([![npm](https://img.shields.io/npm/dm/redux-localstorage-immutable.svg?style=flat-square)](https://www.npmjs.com/package/redux-localstorage-immutable)) [![npm](https://img.shields.io/npm/dm/redux-localstorage-immutable.svg?style=flat-square)](https://www.npmjs.com/package/redux-localstorage-immutable)


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

**Note:** I've documented the parameters here to explain what each method does, but in practice you can just pass them to the appropriate methods without worrying about it.

### deserialize (state, payload)

Merges `payload` into `state` and returns the resulting Immutable. Used to take the JSON string from local storage and merge it into the store.

### serialize (storage)

Adds a `put` that converts the state to a JavaScript object and passes the storage object along. Used to prepare your Immutable for local storage. Probably should go before any other enhancers, unless they don't care about the state (like [redux-localstorage-debounce](https://github.com/elgerlambert/redux-localstorage-debounce)) or they're expecting an Immutable rather than a plain JavaScript object.

## Thanks

Cheers to [redux-localstorage](https://github.com/elgerlambert/redux-localstorage) and [redux-immutablejs](https://github.com/indexiatech/redux-immutablejs)!
