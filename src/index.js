import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import Checkbox from './Checkbox.js';
import Buttons from './Buttons';
import TextItalic from './TextItalic';

import App from './App';


const Text = ({label, color, size, underline}) => {   
  return <div className="text" style={{color: color, fontSize: size, textDecoration: underline ? 'underline' : 'none'}}> {label} </div>
}

const Square = ({ className, text}) => {
  return <div>
           <p className={className}>{text}</p>
         </div>
}

ReactDOM.render(
  <React.StrictMode>


 <App/>

  </React.StrictMode>,
  document.getElementById('root')
);
