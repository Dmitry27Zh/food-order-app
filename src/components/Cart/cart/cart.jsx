import { useContext } from 'react'
import Modal from '../../UI/modal/modal'
import styles from './cart.module.css'
import CartContext from '../../../store/cart-context'
import CartItem from '../cartItem/cartItem'
import { roundToDecimalPlaces } from '../../../utils/numbers'

const Cart = (props) => {
  const { onHide } = props
  const cartContext = useContext(CartContext)
  const total = `$${roundToDecimalPlaces(cartContext.total, 2)}`
  const addHandler = (item) => {
    cartContext.addItem(item, 1)
  }
  const removeHandler = (item) => {
    cartContext.removeItem(item, 1)
  }
  const items = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem key={item.id} onAdd={() => addHandler(item)} onRemove={() => removeHandler(item)} {...item} />
      ))}
    </ul>
  )
  const hasItems = cartContext.items.length > 0
  const renderOrderButton = () => (hasItems ? <button className={styles.button}>Заказать</button> : '')

  return (
    <Modal onClose={onHide}>
      {items}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{total}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHide}>
          Закрыть
        </button>
        {renderOrderButton()}
      </div>
    </Modal>
  )
}

export default Cart
