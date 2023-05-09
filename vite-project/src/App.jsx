import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addCount = ()=>{
    setCount(prevCount=>prevCount+1)
  }

  const deleteCount = ()=>{
    setCount(prevCount=>{
      if(prevCount === 0){
        return 0
      }
      return prevCount-1
    })
  }

  return (
    <div className='counter-app'>
      <div>
        <h3 className='add' onClick={addCount}>add</h3>
        <h3 className='subtract' onClick={deleteCount}>subtract</h3>
      </div>

      <h2 className='counter'>{count}</h2>

    </div>
  )
}

export default App
