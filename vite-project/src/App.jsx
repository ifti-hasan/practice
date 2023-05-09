import { useState,useReducer } from 'react'

const increment = 'increment'
const decrement = 'decrement'

const initialState = { count: 0 }
function reducer(state, action){
  switch(action.type){
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      if(state.count === 0){
        return { count: 0 }
      }
      return {count: state.count- action.payload }
  }
}

function App() {
  const [state, dispatch ] = useReducer(reducer, initialState)

  return (
    <div className='counter-app'>
      <div>
        <h3 className='add' onClick={()=> dispatch({ type: 'increment', payload:1 })}>add</h3>
        <h3 className='subtract' onClick={()=> dispatch({ type: 'decrement', payload: 1 })}>subtract</h3>
      </div>

      <h2 className='counter'>{state.count}</h2>

    </div>
  )
}

export default App
