import CartIcon from '../../Cart/cartIcon'
import styles from './headerCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  )
}

export default HeaderCartButton
