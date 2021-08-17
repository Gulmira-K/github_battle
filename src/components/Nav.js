import { NavLink } from "react-router-dom";

const links = ['Home', 'Popular', 'Battle']

const Nav = () => {
  return (
    <nav>
      <ul className={'nav'}>
        {links.map((link, i) => {
          return (<li key={i}>
            <NavLink exact to={link === 'Home' ? '/' : link.toLowerCase()}>
              {link}
            </NavLink>
          </li>)
        })}
      </ul>
    </nav>
  )
}

export default Nav
