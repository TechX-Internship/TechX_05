import React from 'react'
import Miniheader from '../component/miniheader/Miniheader'
import gal from './gallery.module.css'

const page = () => {
    return (
        <>
            <Miniheader />
            <div className={`${gal.bgclr} pt-5`} >
                <section className='pt-5 position-relative '>
                    <div className="container" style={{ height: "1500px" }}>
                        <div className="d-flex">
                            <div className="col-6">
                                <div className={`${gal.abouttitle} position-relative`}>
                                    <div className={`${gal.cirsix}`}></div>
                                    <div className={`${gal.abt} mt-5`}>
                                        <h1 className={`${gal.txtheading2} mt-5 ms-5`}>
                                            Our Gallery
                                        </h1>
                                    </div>
                                </div>
                                <div className={`${gal.arrow12}`}>
                                    <img src="./icon/Line12.png" alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <p className={`${gal.txtp} mt-5`}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis lentesque non orci in .Lorem ipsum dolor sit amet, nsectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi </p>
                            </div>
                        </div>
                        <div className={gal.galimg}>
                            <img src="./images/galimg.png" alt="" />
                        </div>
                    </div>
                    <div className={gal.design3}>
                        <img src="./icon/design3.png" alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default page