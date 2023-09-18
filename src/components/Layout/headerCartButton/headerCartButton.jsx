import { useContext, useEffect, useState } from 'react'
import CartIcon from '../../Cart/cartIcon'
import styles from './headerCartButton.module.css'
import CartContext from '../../../store/cart-context'

const HeaderCartButton = (props) => {
  const [isAnimated, setIsAnimated] = useState(false)
  const { onClick } = props
  const cartContext = useContext(CartContext)
  const count = cartContext.items.reduce((result, item) => result + item.amount, 0)
  const getClasses = () => {
    let classes = `${styles.button}`

    if (isAnimated) {
      classes += ` ${styles.bump}`
    }

    return classes
  }
  useEffect(() => {
    if (cartContext.items.length > 0) {
      setIsAnimated(true)
    }

    const timerId = setTimeout(() => {
      setIsAnimated(false)
    }, 300)

    return () => {
      clearTimeout(timerId)
    }
  }, [cartContext.items])

  return (
    <button className={getClasses()} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{count}</span>
    </button>
  )
}

export default HeaderCartButton
