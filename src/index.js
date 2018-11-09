import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.scss';

const middleware = applyMiddleware(thunk);
// const store = createStore(rootReducer, middleware);
const store = createStore(state => state, middleware);
const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    insertionPoint: document.getElementById('jss-insertion-point'),
});

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <App/>
        </Provider>
    </JssProvider>,
    document.getElementById('root')
);

registerServiceWorker();
