import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from './components/Info'
import Footer from './components/Footer'
import About from './components/About'
import Interests from './components/Interests'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}

export default App
