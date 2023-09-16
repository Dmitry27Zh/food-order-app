import { useState } from 'react'
import Cart from './components/Cart/cart'
import Header from './components/Layout/header/header'
import Meals from './components/Meals/meals'

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false)
  const showCartHandler = () => {
    setCartIsVisible(true)
  }
  const hideCartHandler = () => {
    setCartIsVisible(false)
  }
  const renderCart = () => {
    if (cartIsVisible) {
      return <Cart onHide={hideCartHandler} />
    }
  }

  return (
    <>
      {renderCart()}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
