import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  total: 0,
}
const cartReducer = (state, action) => {
  let stateChanges = {}

  if (action.type === 'ADD') {
    const item = { ...action.meal, amount: action.amount }
    const updatedItems = state.items.concat(item)
    const updatedTotal = state.total + item.price * item.amount

    stateChanges = {
      items: updatedItems,
      total: updatedTotal,
    }
  }

  if (action.type === 'AMOUNT') {
    const updatedItems = state.items.map((item) => {
      if (item.id === action.meal.id) {
        item.amount += action.amount
      }

      return item
    })
    const updatedTotal = state.total + action.meal.price * action.amount

    stateChanges = {
      items: updatedItems,
      total: updatedTotal,
    }
  }

  if (action.type === 'REMOVE') {
    const updatedItems = state.items.filter((item) => item.id !== action.meal.id)
    const updatedTotal = state.total - action.meal.price

    stateChanges = {
      items: updatedItems,
      total: updatedTotal,
    }
  }

  return { ...state, ...stateChanges }
}

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
  const addItemHandler = (meal, amount) => {
    const isExist = !!cartState.items.find((item) => item.id === meal.id)
    const actionType = isExist ? 'AMOUNT' : 'ADD'

    dispatchCartState({
      type: actionType,
      meal,
      amount,
    })
  }
  const removeItemHandler = (item, amount) => {
    const actionType = item.amount <= amount ? 'REMOVE' : 'AMOUNT'

    dispatchCartState({
      type: actionType,
      meal: item,
      amount: -amount,
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
