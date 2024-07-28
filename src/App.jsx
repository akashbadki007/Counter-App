import { useState } from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(0)

  const decrementEventHandler = () => {
    if(count > 0)
    setCount(count - 1);
  }

  const incrementEventHandler = () => {
    if(count < 10)
    setCount(count + 1);
  }

  const resetEventHandler = () => {
    setCount(0);
  }

  return (

    <div className='counterAppContainer'>

      <h1>Counter App </h1>

      <div className='btn-section'>
        <button 
         className='btn'
         onClick={decrementEventHandler} >
         - 
        </button>

        <div> {count} </div>

        <button 
         className='btn'
         onClick={incrementEventHandler}> 
         +
        </button>

      </div>

      <button
       className='btn'
       onClick={resetEventHandler} >
        Reset 
      </button>

    </div>
  )
}

export default App
