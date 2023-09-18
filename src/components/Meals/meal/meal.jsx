import { useContext } from 'react'
import MealForm from '../mealForm/mealForm'
import styles from './meal.module.css'
import CartContext from '../../../store/cart-context'

const Meal = (props) => {
  const { meal } = props
  const { id, name, description, price } = meal
  const cartContext = useContext(CartContext)
  const formattedPrice = `$${price.toFixed(2)}`
  const addHandler = (amount) => {
    cartContext.addItem(meal, amount)
  }

  return (
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealForm onAdd={addHandler} id={id} />
      </div>
    </div>
  )
}

export default Meal
