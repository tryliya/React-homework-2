import './App.css';
import Tap from './Tap.js';
import React from 'react';

class App extends React.Component {
    inConsole = () => {
        console.log('Первая кнопка была нажата')
    }
    inAlert = () => {
        alert('Кнопка 2 была нажата')
    }
    inConsoleWithArg = (param) => {
        console.log(`Функция с параметром: ${param}`)
    }

    render(){
      return (
        <div className="wrap">
          <Tap label="Кнопка 1" clickFunction={this.inConsole}/>
          <Tap label="Кнопка вторая" clickFunction={this.inAlert}/>
          <Tap label ="Кнопка с параметром" clickFunction={this.inConsoleWithArg}/>
        </div>
    )};
}

export default App;
