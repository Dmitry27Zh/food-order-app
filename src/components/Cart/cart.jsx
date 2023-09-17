import { useContext } from 'react'
import Modal from '../UI/modal/modal'
import styles from './cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const { onHide } = props
  const cartContext = useContext(CartContext)
  const total = `$${cartContext.total.toFixed(2)}`
  const items = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )

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
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  )
}

export default Cart
