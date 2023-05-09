import { useState,useReducer } from 'react'

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
  // const [count, setCount] = useState(0)
  const [state, dispatch ] = useReducer(reducer, initialState)

  // const addCount = ()=>{
  //   setCount(prevCount=>prevCount+1)
  // }

  // const deleteCount = ()=>{
  //   setCount(prevCount=>{
  //     if(prevCount === 0){
  //       return 0
  //     }
  //     return prevCount-1
  //   })
  // }

  return (
    <div className='counter-app'>
      {/* <div>
        <h3 className='add' onClick={addCount}>add</h3>
        <h3 className='subtract' onClick={deleteCount}>subtract</h3>
      </div> */}
      <div>
        <h3 className='add' onClick={()=> dispatch({ type: 'increment', payload:1 })}>add</h3>
        <h3 className='subtract' onClick={()=> dispatch({ type: 'decrement', payload: 1 })}>subtract</h3>
      </div>

      <h2 className='counter'>{state.count}</h2>

    </div>
  )
}

export default App
