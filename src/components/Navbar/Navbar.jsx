import React, { useState } from 'react';
import logo from "../../assets/flag-orpheus-top.svg";
import style from "./Navbar.module.css";
import mainstyle from "../../Main.module.css";
import { Link } from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (

    <header className={style.header}>

      <nav className={style.nav + ' ' + mainstyle.container}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={nav ? style.close : style.open}>
          <ul className={style.links}>
            <li className={style.link + ' ' + mainstyle.subheadline}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={-60}
                duration={500}
                delay={250}
                isDynamic={true}
                to="Home"
              >
                Home
              </Link>
            </li>
            <li className={style.link + ' ' + mainstyle.subheadline}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={-60}
                duration={500}
                delay={250}
                isDynamic={true}
                to="Home"
              >
                About us
              </Link>
            </li>
            <li className={style.link + ' ' + mainstyle.subheadline}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={-60}
                duration={500}
                delay={250}
                isDynamic={true}
                to="Home"
              >
                Scrapbook
              </Link>
            </li>
            <li className={style.link + ' ' + mainstyle.subheadline}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={-60}
                duration={500}
                delay={250}
                isDynamic={true}
                to="Home"
              >
                Links
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={() => {
          setNav(!nav);
        }} className={nav ? style.hamburger : style.active}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar;