import styles from './cartItem.module.css'

const CartItem = (props) => {
  const { name, price, amount, onRemove, onAdd } = props
  const priceContent = `$${price.toFixed(2)}`

  return (
    <div className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{priceContent}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  )
}

export default CartItem
