import React from 'react'
import footer from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className={footer.bg}>
            <div>
                <div className="logoimg text-center pt-5">
                    <img src="./images/logofooter.png" alt="" />
                </div>
                <ul className='d-flex align-items-center justify-content-center my-3'>
                    <li className={footer.lin}><Link href={'/'}> Home</Link></li>
                    <li className={footer.lin}><Link href={'/gallery'}> Gallery</Link></li>
                    <li className={footer.lin}><Link href={'/reviews'}>Reviews</Link></li>
                    <li className={footer.lin}><Link href={'/contact'}>Contact</Link></li>
                    <li className={footer.lin}><Link href={'/about'}> About</Link></li>
                </ul>
                <p className='text-center m-auto pb-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel molestie est. Proin pulvinar nulla a nunc aliquam dignissim. Vivamus aliquet,
                </p>
            </div>
            <div className='d-flex'>
                <div className="ft-left position-relative">
                    <img src="./icon/footerleft.png" alt="" />
                    <span className={`${footer.lft}`}> © 2023 NPJ Jewellers | All Rights Reserved </span>
                </div>
                <ul className='d-flex justify-content-between ps-0 gap-4 m-auto'>
                    <li className='mx-0'>
                        <img src="./icon/facebook.png" alt="" />
                    </li>
                    <li className='mx-0'>
                        <img src="./icon/twitter.png" alt="" />
                    </li>
                    <li className='mx-0'>
                        <img src="./icon/linkedin.png" alt="" />
                    </li>
                    <li className='mx-0'>
                        <img src="./icon/instagram.png" alt="" />
                    </li>
                </ul>
                <div className="ft-right position-relative">
                    <img src="./icon/footerright.png" alt="" />
                    <span className={`${footer.rgt}`}> Terms & Condition | Support | Policy </span>
                </div>

            </div>
        </section>
    )
}

export default Footer