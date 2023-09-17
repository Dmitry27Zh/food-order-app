import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  total: 0,
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.item.concat(action.item)
    const updatedTotal = state.amount + state.item.price * state.item.amount

    return {
      items: updatedItems,
      total: updatedTotal,
    }
  }

  return defaultCartState
}

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
  const addItemHandler = (item) => {
    dispatchCartState({
      type: 'ADD',
      item: item,
    })
  }
  const removeItemHandler = (id) => {
    dispatchCartState({
      type: 'REMOVE',
      id,
    })
  }

  const ctx = {
    items: cartState.items,
    total: cartState.amount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
}

export default CartContextProvider
