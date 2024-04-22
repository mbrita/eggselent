import React from "react"
import { Link } from "react-router-dom"
import classes from "./Nav.module.scss"
import classNames from "classnames"

export const NavItem = ({ item, open, close }) => {
  return (
    <Link className={classes.navLink} to="">
      {item.title}
      <div
        className={classNames(
          classes.dropdownMenu,
          open && classes.dropdownMenuActive
        )}
        onMouseLeave={() => close(null)}
      >
        <div className={classes.triangle} />
        {item.menu.map((submenu) => (
          <Link className={classes.dropdownMenuLink} to={submenu.link}>
            {submenu.title}
          </Link>
        ))}
      </div>
    </Link>
  )
}
