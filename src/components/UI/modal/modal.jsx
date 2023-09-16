import ReactDOM from 'react-dom'
import styles from './modal.module.css'

const Backdrop = () => {
  return <div className={styles.backdrop}></div>
}

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, document.getElementById('modal'))}
    </>
  )
}

export default modal
