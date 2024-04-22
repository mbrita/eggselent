import React, { useState } from "react"
import classes from "./Nav.module.scss"
import classNames from "classnames"
import Logo from "../../assets/nav/EGGSELLENT_LOGO-2_1.png"
import Search from "../../assets/nav/Search.svg"
import CancelIcon from "../../assets/nav/CancelImg.svg"
import { Link } from "react-router-dom"
import { NavItem } from "./NavItem"

function Nav() {
  const navMenu = [
    {
      title: "Доставка",
      menu: [
        { title: "Доставка в Москве", link: "/msk" },
        { title: "Доставка в Петербурге", link: "/spb" },
        { title: "Большая доставка", link: "/big-delivery" },
      ],
    },
    {
      title: "Самовывоз",
      menu: [
        { title: "Самовывоз в Москве", link: "/msk" },
        { title: "Самовызов в Петербурге", link: "/spb" },
      ],
    },
    {
      title: "Кафе",
      menu: [
        { title: "Домик в Москве на Маяковской", link: "/msk" },
        { title: "Домик в Москве на Парке Культуры ", link: "/spb" },
        { title: "Кафе в Петербурге", link: "/big-delivery" },
        { title: "Корнер в Петербурге", link: "/big-delivery" },
        { title: "Корнер в Алматы", link: "/big-delivery" },
      ],
    },
    {
      title: "Магазин",
      menu: [{ title: "Все товары", link: "/msk" }],
    },
    {
      title: "Гостям",
      menu: [
        { title: "КБЖУ", link: "/msk" },
        { title: "Клуб любителей завтраков", link: "/spb" },
        { title: "Наши правила", link: "/big-delivery" },
      ],
    },
    {
      title: "О нас",
      menu: [
        { title: "О проекте", link: "/msk" },
        { title: "Кейсы", link: "/spb" },
        { title: "Пресса о нас", link: "/big-delivery" },
      ],
    },
    {
      title: "Команда",
      menu: [
        { title: "Команда", link: "/msk" },
        { title: "Работать с нами", link: "/spb" },
      ],
    },
  ]

  const [activeBlock, setActiveBlock] = useState(null) // отвечает за выпадающее меню по каждой ссылке
  const [activeBtn, setActiveBtn] = useState(false) // отвечает за кнопку поиска

  return (
    <div>
      <div className={classNames(classes.navWrapper)}>
        <Link to="/home">
          <img className={classes.navLogo} src={Logo} alt="" />
        </Link>
        <div className={classes.navLinks}>
          {navMenu.map((item, index) => (
            <div onMouseEnter={() => setActiveBlock(index)}>
              <NavItem
                item={item}
                open={activeBlock === index}
                close={setActiveBlock}
              />
            </div>
          ))}
          <div className={classes.navBtns}>
            <Link to="/contact">
              <button className={classes.navBtn}>Контакты</button>
            </Link>
            <button
              className={classes.navBtn}
              onClick={() => setActiveBtn(true)}
            >
              Поиск
            </button>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          classes.dropDownSearch,
          activeBtn === true && classes.dropDownSearchActive
        )}
      >
        <div >
          <input
            className={classes.dropdownInput}
            type="text "
            placeholder="Что будем искать?"
          />
          <img
            onClick={() => setActiveBtn(false)}
            className={classes.dropDownImg}
            src={CancelIcon}
            alt=""
          />
        </div>
        <div className={classes.dropdownBtns}>
          <button className={classes.dropdownBtn}>меню</button>
          <button className={classes.dropdownBtn}> сертификаты </button>
          <button className={classes.dropdownBtn}> доставка </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
