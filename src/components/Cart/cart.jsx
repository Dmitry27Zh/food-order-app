import Modal from '../UI/modal/modal'
import styles from './cart.module.css'

const Cart = (props) => {
  const { onHide } = props
  const items = (
    <ul className={styles['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', amount: 2, price: 10.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={onHide}>
      {items}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
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
