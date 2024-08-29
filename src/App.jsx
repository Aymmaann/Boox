import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Shop from './components/Shop/Shop'
import ErrorIcon from "./assets/icon-error.svg"
import Cart from './components/Cart/Cart'

const App = () => {
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)
  const [showHomePage, setShowHomePage] = useState(true)

  const handleClick = (item) => {
    let isPresent = false
    cart.forEach(cartItem => {
      if(cartItem.id === item.id) {
        isPresent = true
      }
    })
    if(isPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000)
      return
    }
    setCart([...cart, item])
  }

  return (
    <>
      <Nav size={cart.length} setShowHomePage={setShowHomePage}/>

      {(showHomePage)? <Shop handleClick={handleClick}/> : 
        <Cart cart={cart} setCart={setCart}/>} 

      {warning && 
        <div className='warning'>
          Item is already Present in your Cart
          <img src={ErrorIcon} alt="" />
        </div>}
    </>
  )
}

export default App
