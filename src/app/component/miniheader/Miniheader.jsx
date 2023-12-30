import React from 'react'
import mini from './miniheader.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Miniheader = () => {
    return (
        <>
            <div className={`${mini.hrgrad}`}></div>
            <div className={`${mini.lngrad}`}></div>
            <div className={`${mini.bgimg}`}></div>
            <header className={`${mini.upr}`}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between py-2">
                        <div className={`${mini.circle} d-flex justify-content-center align-items-center`}>
                            <img src="./icon/Frame.png" alt="" className="" />
                        </div>
                        <Link href={'/'}>
                            <div className="logo border-bottom border-bottom-secondary-subtle">
                                <img src="./images/Logo.png" alt="" mini={{ width: "247px" }} />
                            </div>
                        </Link>
                        <div className={`${mini.circle} d-flex justify-content-center align-items-center`}>
                            <img src="./icon/wp.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </header>
            <div className={mini.rgt}>
                <img src="./icon/Group8.png" alt="" mini={{ height: "150px" }} />
            </div>
        </>
    )
}

export default Miniheader