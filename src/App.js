import React, {useState} from 'react';
import Value from './Value';
import increment from './img/add.png';
import decrement from './img/minus.png';
import shift from './img/switch.png'
import './App.css';

function App() {
  let [Number, setNumber]= useState(0)
  let [Time, setTime] = useState(true)
  return (
    <div className={`night ${Time ? 'day' : ''}`}>
      <h3>Good {Time ? 'Morning' : 'Night'}</h3>
      <Value val={Number} />
      <br />
      <button onClick={() => setNumber(++Number)}><img src={increment} alt='increment' height='70' width='70' /></button>
      <br />
      <br />
      <button onClick={() => setNumber(--Number)}><img src={decrement} alt='decrement' height='70' width='70' /></button>
      <br />
      <br />
      <button onClick={() => setTime(!Time)}><img src={shift} alt='shift' height='70' width='70' /></button>
    
    </div>
  );
}

export default App;
