import Input from '../../UI/input/input'
import styles from './mealForm.module.css'

const MealForm = (props) => {
  return (
    <form className={styles.form}>
      <Input label="Количество" input={{ id: 'amount', type: 'number', min: '1', step: '1', defaultValue: '1' }} />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default MealForm
