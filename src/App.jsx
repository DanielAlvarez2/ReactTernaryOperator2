import {useState} from 'react'
function App() {

  const [isGoingOut, setIsGoingOut] = useState(false)

  function handleClick(){
    setIsGoingOut(!isGoingOut)
  }
  return (
    <main>
      <div>
        <h1>Do I feel like going out tonight?</h1>
        <button 
                onClick={handleClick}
                aria-label={`Current answer is ${isGoingOut?'Yes':'No'}. Click to change it.`}        
        >
          {isGoingOut?'Yes':'No'}
        </button>
      </div>
    </main>
  )
}

export default App
