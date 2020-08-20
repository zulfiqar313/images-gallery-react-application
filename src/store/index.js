import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        // compose(
        applyMiddleware(sagaMiddleware),
        // window.__Redux_DEVTOOLS_EXTENSION__ &&
        //     window.__Redux_DEVTOOLS_EXTENSION__(),
    );
    sagaMiddleware.run(rootSaga);
    // store.dispatch({ type: 'Logout' });
    // store.dispatch({ type: 'Login' });

    // store.dispatch({ type: 'Logout' });

    return store;
};
export default configureStore;
