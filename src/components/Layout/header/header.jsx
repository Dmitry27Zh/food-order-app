import sushiImage from '../../../assets/sushi.jpg'
import styles from './header.module.css'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Япона кухня</h1>
        <button>Корзина</button>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </>
  )
}

export default Header
