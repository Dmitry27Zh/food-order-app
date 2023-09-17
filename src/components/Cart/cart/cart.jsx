import { useContext } from 'react'
import Modal from '../../UI/modal/modal'
import styles from './cart.module.css'
import CartContext from '../../../store/cart-context'
import CartItem from '../cartItem/cartItem'

const Cart = (props) => {
  const { onHide } = props
  const cartContext = useContext(CartContext)
  const total = `$${cartContext.total.toFixed(2)}`
  const addHandler = (item) => {
    console.log('add one')
  }
  const removeHandler = (id) => {
    console.log('remove one')
  }
  const items = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem key={item.id} onAdd={() => addHandler(item)} onRemove={() => removeHandler(item.id)} {...item} />
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
