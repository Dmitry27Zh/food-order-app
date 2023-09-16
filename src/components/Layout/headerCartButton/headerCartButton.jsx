import { useContext } from 'react'
import CartIcon from '../../Cart/cartIcon'
import styles from './headerCartButton.module.css'
import CartContext from '../../../store/cart-context'

const HeaderCartButton = (props) => {
  const { onClick } = props
  const cartContext = useContext(CartContext)
  const count = cartContext.items.reduce((result, item) => result + item.amount, 0)

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{count}</span>
    </button>
  )
}

export default HeaderCartButton
