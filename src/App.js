import './App.css';
import { Tap } from './Tap.js';

function App() {
    let inConsole = () => {
        console.log('Первая кнопка была нажата')
      }
      let inAlert = () => {
        alert('Кнопка 2 была нажата')
      }
      let inConsoleWithArg = (element) => {
        console.log(element)
      }
  return (
    <div className="wrap">
      <Tap label="Кнопка 1" onClick={inConsole}/>
      <Tap label="Кнопка вторая" onClick={inAlert}/>
      <Tap label ="Кнопка с параметром" onClick={() => inConsoleWithArg('Функция с параметром: кнопка с параметром')}/>
    </div>
  );
}

export default App;
