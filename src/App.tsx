import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tasbeeh</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>

      </div>
    </>
  )
}

export default App
