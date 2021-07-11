import { createStore, applyMiddleware, compose } from 'redux';
import Rehydration from '../services/Rehydration';
import ReduxPersist from '../configs/ReduxPersist';
import createSagaMiddleware from 'redux-saga';

export default (rootReducer: any, rootSaga: any) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};
