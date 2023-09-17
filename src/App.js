import { useState } from 'react'
import Cart from './components/Cart/cart/cart'
import Header from './components/Layout/header/header'
import Meals from './components/Meals/meals'
import CartContextProvider from './store/cartContextProvider'

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
    <CartContextProvider>
      {renderCart()}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  )
}

export default App
