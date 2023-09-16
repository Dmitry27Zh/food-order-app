import CartContext from './cart-context'

const CartContextProvider = (props) => {
  const addItemHandler = (item) => {}
  const removeItemHandler = (id) => {}

  const ctx = {
    items: [],
    total: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
}

export default CartContextProvider
