import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Shop from './components/Shop/Shop'

const App = () => {
  const [cart, setCart] = ([])

  return (
    <>
      <Nav size={cart.length}/>
      <Shop />
    </>
  )
}

export default App
