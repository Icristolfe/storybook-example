import React from "react"
import Button from "./components/Button"

function App() {

  return (
    <div style={{display:'flex',
    flexDirection:'column',
    gap:20}} className="App">
   <Button>Olá </Button>
   <Button variant="secondary">Olá </Button>
   <Button variant="outline">Olá </Button>
    </div>
  )
}

export default App
