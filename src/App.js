import Cart from './components/Cart/cart'
import Header from './components/Layout/header/header'
import Meals from './components/Meals/meals'

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
