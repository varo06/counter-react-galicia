
import { useState } from 'react'
import './App.css'
//import CounterState from './components/CounterState'
function App() {
  const [count,setCount] = useState(-1)
  let scoreColor = "gray";
  
  if(count> 0) scoreColor = "green";
  else if (count < 0) scoreColor = "red";

  return (
    <div className="container">
      <div className="row max-height align-items-center">
        <div className="col-10 mx-auto  text-center main-container p-5">
          <h1 className="text-uppercase">counter</h1>
          <h2 style={{color: scoreColor}} id="counter">{count}</h2>
          <div className="btn-container d-flex justify-content-around flex-wrap">
            <button onClick={() => setCount(count-1)} className="btn counterBtn prevBtn text-uppercase m-2">
              lower count
            </button>
            <button onClick={() => setCount(count+1)} className="btn counterBtn nextBtn text-uppercase m-2">
              add count
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
