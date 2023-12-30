import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className={`${style.hrgrad}`}></div>
      <div className={`${style.lngrad}`}></div>
      <div className={`${style.bgimg}`}></div>
      <header className={`${style.upr}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-2">
            <div className={`${style.circle} d-flex justify-content-center align-items-center`}>
              <img src="./icon/Frame.png" alt="" className="" />
            </div>
            <div className="logo border-bottom border-bottom-secondary-subtle">
              <Link href={'/'}>
                <img src="./images/Logo.png" alt="" style={{ width: "247px" }} />
              </Link>
            </div>
            <div className={`${style.circle} d-flex justify-content-center align-items-center`}>
              <img src="./icon/wp.png" alt="" className="" />
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <h1 className={style.h1}>EXPLORE OUR EXQUISITE JEWELRY COLLECTION</h1>
      </div>
      <div className={style.rgt}>
        <img src="./icon/Group8.png" alt="" style={{ height: "150px" }} />
      </div>
    </>
  )
}

export default Header