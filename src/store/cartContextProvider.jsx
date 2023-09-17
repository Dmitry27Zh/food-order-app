import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  total: 0,
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    const isExist = existingItemIndex !== -1
    const updatedItems = isExist
      ? state.items.map((item, index) => {
          if (index === existingItemIndex) {
            item.amount += action.item.amount
          }

          return item
        })
      : state.items.concat(action.item)
    const updatedTotal = state.total + action.item.price * action.item.amount

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
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
}

export default CartContextProvider
