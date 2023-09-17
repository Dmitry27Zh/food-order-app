import { useRef, useState } from 'react'
import Input from '../../UI/input/input'
import styles from './mealForm.module.css'

const MealForm = (props) => {
  const { id, onAdd } = props
  const [isAmountValid, setIsAmountValid] = useState(true)
  const amountInputRef = useRef()
  const submitHandler = (event) => {
    event.preventDefault()
    const amount = +amountInputRef.current.value

    if (Number.isNaN(amount) || amount < 1 || amount > 10) {
      setIsAmountValid(false)

      return
    }

    onAdd(amount)
  }
  const renderError = () => {
    let msg = ''

    if (!isAmountValid) {
      msg = 'Пожалуйста введите количество от 1 до 10'
    }

    return <p>{msg}</p>
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{ id: `amount:${id}`, type: 'number', min: '1', step: '1', defaultValue: '1' }}
      />
      <button type="submit">Добавить</button>
      {renderError()}
    </form>
  )
}

export default MealForm
