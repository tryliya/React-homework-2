import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkbox from './Checkbox.js';

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
    <div className="text_container">
      <Text label="Regular text" color= "grey" size={20} underline={false}/>
      <Text label="Huge header" color= "black" size={50} underline={false}/>
      <Text label="Danger notification" color= "red" size={20} underline={false}/>
      <Text label="Underlined text" color= "black" size={30} underline={true}/>
    </div>
    
    <div clasName="square_container">
      <Square className="big" text="BIG square"/>
      <Square className="less" text="A less square"/>
      <Square className="small" text="The smallest one"/> 
    </div>
    <Checkbox/>
  </React.StrictMode>,
  document.getElementById('root')
);
