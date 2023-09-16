import CartIcon from '../../Cart/cartIcon'
import styles from './headerCartButton.module.css'

const HeaderCartButton = (props) => {
  const { onClick } = props

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  )
}

export default HeaderCartButton
