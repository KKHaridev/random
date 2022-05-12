import React from 'react';
import style from "./Main.module.css";
import mainstyle from "../../Main.module.css";
import logo from "../../assets/Layer 2 (1) 3.png"


const Main=()=> {
  return (
    <div className={style.main}>
      <div className={mainstyle.container+' '+style.box}>
          <div className={style.content}>
            <h1 className={mainstyle.h1}>Lorem</h1>
            <h3 className={mainstyle.heading}>Lorem ih3sum, dolor sit amet consectetur adih3isicing elit. h3raesentium animi dolores voluh3tas h3ariatur ex adih3isci, nulla oh3tio corruh3ti beatae eveniet.</h3>
          </div>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Main;