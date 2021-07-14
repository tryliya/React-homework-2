import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from './App.js';
import Counter from './Counter.js';
import MyBouquet from './MyBouquet.js';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Counter/>
    <MyBouquet/>
    </React.StrictMode>,
  document.getElementById('root')
);
