export const deserialize = (state, payload) => state.merge(payload);

export const serialize = (storage) => ({
  ...storage,
  put: (key, state, callback) => storage.put(key, state.toJS(), callback)
});
