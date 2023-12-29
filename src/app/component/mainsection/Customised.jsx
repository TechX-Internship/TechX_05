import React from 'react'
import hero from './product.module.css'

const Customised = () => {
    return (
        <>
            <section className={`${hero.owner}`}>
                <div className={`${hero.ownerimg} text-center position-relative`}>
                    <img src="./images/owner.png" alt="" />
                    <div className={`${hero.butter1}`}>
                        <img src="./images/butter1.png" alt="" />
                    </div>
                    <div className={`${hero.butter2}`}>
                        <img src="./images/butter2.png" alt="" />
                    </div>
                    <div className={`${hero.lives1}`}>
                        <img src="./images/lives1.png" alt="" />
                    </div>
                    <div className={`${hero.lives2}`}>
                        <img src="./images/lives2.png" alt="" />
                    </div>
                    <div className={`${hero.circbig}`}>
                        <img src="./images/cirbig.png" alt="" />
                    </div>
                    <div className={`${hero.arrow12}`}>
                        <img src="./icon/line10.png" alt="" />
                    </div>
                    <div className={`${hero.arrow13}`}>
                        <img src="./icon/line11.png" alt="" />
                    </div>
                    <div className={`${hero.circrim6}`}>
                        <h3>View Our Gallery</h3>
                    </div>
                </div>
                <h2 className='text-center'>customized jewellery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel molestie est. Proin pulvinar nulla a nunc aliquam dignissim. Vivamus aliquet, orci in egestas cursus, augue tortor pretium libero, ut aliquam neque lorem vel eros.</p>

            </section>
        </>
    )
}

export default Customised