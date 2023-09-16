import sushiImage from '../../../assets/sushi.jpg'
import HeaderCartButton from '../headerCartButton/headerCartButton'
import styles from './header.module.css'

const Header = (props) => {
  const { onShowCart } = props

  return (
    <>
      <header className={styles.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </>
  )
}

export default Header
