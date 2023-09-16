import withCard from '../../UI/withCard'
import Meal from '../meal/meal'
import styles from './mealList.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Ролл "Наоми"',
    description: 'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Спайс в лососе',
    description: 'Рис, лосось, соус спайс',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Суши с угрем',
    description: 'Угорь копченый, соус унаги, кунжут',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Салат "Поке с лососем"',
    description: 'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
    price: 7.99,
  },
]

const MealList = () => {
  const mealList = DUMMY_MEALS.map(({ id, ...rest }) => {
    return (
      <li key={id}>
        <Meal {...rest} />
      </li>
    )
  })
  const MealListWithCard = withCard(() => <ul>{mealList}</ul>)

  return <section className={styles.meals}>{<MealListWithCard />}</section>
}

export default MealList
