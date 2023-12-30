import React from 'react'
import Miniheader from '../component/miniheader/Miniheader'
import co from './contact.module.css'
const page = () => {
    return (
        <>
            <Miniheader />
            <div className={`${co.bgclr} pt-5`} style={{ height: "1350px" }}>
                <section className='pt-5 position-relative '>
                    <div className="container" style={{ height: "700px" }}>
                        <div className="d-flex">
                            <div className="col-6">
                                <div className={`${co.abouttitle} position-relative`}>
                                    <div className={`${co.cirsix}`}></div>
                                    <div className={`${co.abt} mt-5`}>
                                        <h1 className={`${co.txtheading2} mt-5 ms-5`}>
                                            Contact Us
                                        </h1>
                                    </div>
                                </div>
                                <div className={`${co.arrow12}`}>
                                    <img src="./icon/Line12.png" alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <p className={`${co.txtp} mt-5`}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis lentesque non orci in .Lorem ipsum dolor sit amet, nsectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi </p>
                            </div>
                        </div>
                    </div>
                    <div className={co.design3}>
                        <img src="./icon/design4.png" alt="" />
                    </div>
                    <div className="container">
                        <form action="" className={co.form}>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 px-5">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" className='mb-2' />
                                        <div className={co.borderform}></div>
                                    </div>
                                    <div className="col-6 px-5">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" className='mb-2' />
                                        <div className={co.borderform}></div>
                                    </div>
                                    <div className="col-6 px-5 mt-4">
                                        <label htmlFor="">Mobile Number</label>
                                        <input type="text" className='mb-2' />
                                        <div className={co.borderform}></div>
                                    </div>
                                    <div className="col-6 px-5 mt-4">
                                        <label htmlFor="">Email id</label>
                                        <input type="text" className='mb-2' />
                                        <div className={co.borderform}></div>
                                    </div>
                                    <div className="col-12 px-5 mt-4">
                                        <label htmlFor="">Email id</label>
                                        <input type="text-area" className='mb-2' />
                                        <textarea name="" id="" cols="30" rows="2"></textarea>
                                        <div className={co.borderformarea}></div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <button className={co.btnn}>SUBMIT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>


            </div>
        </>
    )
}

export default page