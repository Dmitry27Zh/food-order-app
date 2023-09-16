import ReactDOM from 'react-dom'
import styles from './modal.module.css'

const Backdrop = (props) => {
  const { onClick } = props

  return <div className={styles.backdrop} onClick={onClick}></div>
}

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const modal = (props) => {
  const { onClose } = props

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClose} />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, document.getElementById('modal'))}
    </>
  )
}

export default modal
