import React from 'react'
import classes from './HomePage.module.scss'
import { Link } from 'react-router-dom'
import Nav from '../../сomponents/nav/Nav'
import Item1 from '../../assets/Carousel/item1.jpeg'
import Item2 from '../../assets/Carousel/Item2.jpeg'
import Item3 from '../../assets/Carousel/item3.jpeg'
import Item4 from '../../assets/Carousel/item4.avif'
import Item5 from '../../assets/Carousel/item5.jpeg'
import Egg from '../../assets/Carousel/egg.png'
import Card1 from '../../assets/homePage/1642503294_88616625.jpg'
import Card2 from '../../assets/homePage/85778541.png'
import Card3 from '../../assets/homePage/IMG_3274-2.jpg'
import Card4 from '../../assets/homePage/6701212748.jpg'
import Card5 from '../../assets/homePage/33215965.jpg'
import Card6 from '../../assets/homePage/other.jpg'
import Carousel from '../../сomponents/Carousel/Carousel'

const carouselImg = [Item1, Item2, Item3, Item4, Item5]
const deliveryCard = [
  {
    title: 'В МОСКВЕ',
    button: ['Кафе на Маяковской', 'Кафе на Парке культуры', 'Доставка'],
    img: null,
  },
  {
    title: 'В САНКТ-ПЕТЕРБУРГЕ',
    button: ['Корнер на Васильевском рынке', 'Кафе наб. Мойки', 'Доставка'],
    img: null,
  },
  {
    title: 'В КАЗАХСТАНЕ',
    button: ['Корнер в Алматы'],
    img: Egg,
  },
]

const cardsProducts = [
  {
    title: 'Сертификаты',
    img: Card1,
  },
  {
    title: 'Посуда',
    img: Card2,
  },
  {
    title: 'Наряжаемся',
    img: Card3,
  },
  {
    title: 'Для детей',
    img: Card4,
  },
  {
    title: 'К завтраку',
    img: Card5,
  },
  {
    title: 'Смотреть всё',
    img: Card6,
  },
]

const shopCards = [
  {
    title: 'Блестящий сироп для коктейлей',
    description:
      'Бутылочка со сверкающим сиропом для игристого по обновленной рецептуре. Стало больше блеска и меньше сахара!',
    img: Card6,
    price: '890 руб.',
  },
  {
    title: 'Блестящий сироп для коктейлей',
    description:
      'Бутылочка со сверкающим сиропом для игристого по обновленной рецептуре. Стало больше блеска и меньше сахара!',
    img: Card6,
    price: '890 руб.',
  },
  {
    title: 'Блестящий сироп для коктейлей',
    description:
      'Бутылочка со сверкающим сиропом для игристого по обновленной рецептуре. Стало больше блеска и меньше сахара!',
    img: Card6,
    price: '890 руб.',
  },
]
function HomePage() {
  return (
    <div className={classes.homePageBody}>
      {' '}
      <div className={classes.homePageWrapper}>
        <Nav />
        <Carousel img={carouselImg} />
        <h1 className={classes.homePageTitle}>ГДЕ ЕСТЬ НАШИ ЗАВТРАКИ?</h1>
        <div className={classes.deliveryCards}>
          {deliveryCard.map((item) => (
            <div className={classes.deliveryCard}>
              <p>{item.title}</p>
              {item.button.map((btn) => (
                <button className={classes.deliveryCardBtn}>{btn}</button>
              ))}
              <img className={classes.deliveryCardImg} src={item.img} alt="" />
            </div>
          ))}
        </div>
        <h1 className={classes.homePageTitle}>GIFT-SHOP</h1>
        <div className={classes.cardsProducts}>
          {cardsProducts.map((el) => (
            <Link className={classes.cardsProductsLink} to="/">
              <img className={classes.cardsProductsImg} src={el.img} alt="" />
              <p>{el.title}</p>
            </Link>
          ))}
        </div>
        <h1 className={classes.homePageTitle}>
          НАШИ ГОСТИ БОЛЬШЕ ВСЕГО ЛЮБЯТ:
        </h1>
        <div className={classes.shopCards}>
          {shopCards.map((card) => (
            <div className={classes.shopCard}>
              <img className={classes.shopCardImg} src={card.img} alt="" />
              <p>{card.title}</p>
              <p>{card.description}</p>
              <p>{card.price}</p>
              <div>
                <button>Купить</button>
                <button>подробнее</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
