import styles from './cart.module.css'

const Cart = (props) => {
  const items = (
    <ul className={styles['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', amount: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <div>
      {items}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Закрыть</button>
        <button className={styles.button}>Заказать</button>
      </div>
    </div>
  )
}

export default Cart