import styles from './input.module.css'

const Input = (props) => {
  const { label, input } = props
  const { id, ...restInputProps } = input

  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...restInputProps} />
    </div>
  )
}

export default Input
