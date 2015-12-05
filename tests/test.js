import * as chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

let should = chai.should();
chai.use(sinonChai);

import Immutable from 'immutable';

import { serialize, deserialize } from '../src';

describe('deserialize', () => {

  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      one: 1
    });
  });

  it('should add a key to the state if it doesn\'t already exist', () => {
    deserialize(state, {two: 2}).toJS().should.eql({
      one: 1,
      two: 2
    });
  });

  it('should overrwrite a key in the state if it already exists', () => {
    deserialize(state, {one: 2}).toJS().should.eql({
      one: 2
    });
  });
});

describe('serialize', () => {

  function noop () {}

  let storage, immutableStorage;

  beforeEach(() => {
    storage = {
      get: noop,
      put: sinon.stub(),
      del: noop
    };

    immutableStorage = serialize(storage);
  });

  it('should pass `get` and `del` through unchanged', () => {
    immutableStorage.get.should.equal(storage.get);
    immutableStorage.del.should.equal(storage.del);
  });

  it('should wrap `put` in a method that converts the immutable state to JS', () => {
    let key = 'key',
        state = Immutable.fromJS({one: 1}),
        callback = noop;

    immutableStorage.put.should.not.equal(storage.put);

    immutableStorage.put(key, state, callback);
    storage.put.should.be.calledWith(key, state.toJS(), callback);
  });
});
