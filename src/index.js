import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  reducers from './reducers';
import ReduxPromise from 'redux-promise';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export const socket = new WebSocket("ws://192.168.0.90:8000/chat/");
export const id = Math.floor((Math.random() * 1000) + 1);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.container'));
