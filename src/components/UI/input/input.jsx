import React from 'react'
import styles from './input.module.css'

const Input = React.forwardRef((props, ref) => {
  const { label, input } = props
  const { id, ...restInputProps } = input

  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} {...restInputProps} />
    </div>
  )
})

export default Input
