import styles from './meal.module.css'

const Meal = (props) => {
  const { name, description, price } = props
  const formattedPrice = `$${price.toFixed(2)}`

  return (
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
    </div>
  )
}

export default Meal
