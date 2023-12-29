import React from 'react'
import hero from './product.module.css'

const Product = () => {
    return (
        <>
            {/* <div className={`${hero.bgclr}`}> */}
            <div className={`${hero.bgclr}`} style={{ height: "4800px" }}>
                <section className='py-5'>
                    <div className="container " style={{ height: "1600px" }}>
                        <div className="d-flex">
                            <div className="col-6 ">
                                <div className={`${hero.newjewel} position-relative`}>
                                    <div className={`${hero.cirone}`}></div>
                                    <div className={`${hero.arrow3}`}>
                                        <img src="./icon/line3.png" alt="" />
                                    </div>
                                    <div className={hero.newcontent} style={{ marginTop: "120px" }}>
                                        <h1 className={`${hero.txtheading} mt-5`}>
                                            New Jewellery
                                        </h1>
                                        <p className={hero.txtpara}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pelle ntesque non orci in ante viverra finibus ullam corper vitae lacus.</p>
                                    </div>
                                    <div className={`${hero.arrow5}`}>
                                        <img src="./icon/line5.png" alt="" />
                                    </div>
                                    <h2>WE Are PRoud Of The Jewellery We Have Created</h2>
                                    <div className={`${hero.arrow6}`}>
                                        <img src="./icon/line6.png" alt="" />
                                    </div>
                                    <div className={`${hero.circrim2}`}>
                                        <h3>View collection Gallery</h3>
                                    </div>
                                    <div className={`${hero.design1}`}>
                                        <img src="./icon/design1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="morejewel position-relative">
                                    <div className={`${hero.circrim}`}>
                                        <h3>More In The Collection</h3>
                                        <p className='text-uppercase'>Lorem ipsum dolor sit amet, consectetur adipi
                                            scing elit. </p>
                                    </div>
                                    <div className={`${hero.goldcontent} position-absolute`}>
                                        <h3>Gold Neckless</h3>
                                        <p>The exquisite gold necklace shimmered captured sunlight, adorning its wearer with timeless elegance.</p>
                                    </div>
                                    <div className={`${hero.arrow4}`}>
                                        <img src="./icon/line4.png" alt="" />
                                    </div>
                                    <div className={`${hero.cirtwo}`}>
                                        <img src="./images/set1.png" alt="" />
                                    </div>
                                    <div className={`${hero.cirthree}`}>
                                        <img src="./images/set2.png" alt="" />
                                    </div>
                                    <div className={`${hero.cirfour}`}>
                                        <img src="./images/set3.png" alt="" />
                                    </div>
                                    <div className={`${hero.cirfive}`}>
                                        <img src="./images/set4.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='aboutus' >
                    <div className="container" style={{ height: "875px" }}>
                        <div className="d-flex">
                            <div className="col-6">
                                <div className={`${hero.aboutcontent} position-relative`}>
                                    <div className="part1">
                                        <div className={`${hero.coma}`}>
                                            <img src="./icon/coma.png" alt="" />
                                        </div>
                                        <p>Good collection. Nice hospitality. Every time get new design and new creativity. Nice shopping experience. Labour rate is also reasonable.</p>
                                        <h5> - Parth K</h5>
                                    </div>
                                    <div className={`${hero.arrow7}`}>
                                        <img src="./icon/line7.png" alt="" />
                                    </div>
                                    <div className={hero.part2}>
                                        <div className={`${hero.coma2}`}>
                                            <img src="./icon/coma.png" alt="" />
                                        </div>
                                        <p className={`${hero.para2}`}>Best Bridal Collection In Surat , Amazing Experience , Must Visit and see the Bridal Collection</p>
                                        <h5 className='text-center'> - Munno B</h5>
                                    </div>
                                    <div className={`${hero.arrow8}`}>
                                        <img src="./icon/line8.png" alt="" />
                                    </div>
                                    <div className={`${hero.circrim3}`}>
                                        <h3>Read More Reviews</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={`${hero.abouttitle} position-relative`}>
                                    <div className={`${hero.cirsix}`}></div>
                                    <div className={`${hero.abt}`}>
                                        <h1 className={`${hero.txtheading2} mt-5 ms-5`}>
                                            ABOUT US
                                        </h1>
                                        <p className={`${hero.txtpara} ms-5`}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pelle ntesque non orci in ante viverra finibus ullam corper vitae lacus.</p>
                                    </div>
                                    <div className={`${hero.arrow9}`}>
                                        <img src="./icon/line9.png" alt="" />
                                    </div>
                                    <div className={`${hero.circrim4}`}>
                                        <h3>Read More About Us</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gallery mt-5">
                    <div className="container">
                        <div className="d-flex">
                            <div className="col-6">
                                <div className={`${hero.galcont} position-relative`}>
                                    <div className={`${hero.cirseven}`}></div>
                                    <div className={`${hero.galcontent} position-absolute`}>
                                        <h3>Our Gallery</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi
                                            scing elit. Donec at venenatis nulla. Pelle
                                            ntesque non orci in ante viverra finibus ullam corper vitae lacus. </p>
                                    </div>
                                    <div className={`${hero.arrow10}`}>
                                        <img src="./icon/line5.png" alt="" />
                                    </div>
                                    <h2>WE Are PRoud Of The Jewellery We Have Created</h2>
                                    <div className={`${hero.arrow11}`}>
                                        <img src="./icon/line6.png" alt="" />
                                    </div>
                                    <div className={`${hero.circrim5}`}>
                                        <h3>View Our Gallery</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className={`${hero.shop} position-relative`}>
                                    <div className={`${hero.shop1}`}>
                                        <img src="./images/shop1.png" a alt="" />
                                    </div>
                                    <div className={`${hero.shop2}`}>
                                        <img src="./images/shop2.png" a alt="" />
                                    </div>
                                    <div className={`${hero.shop3}`}>
                                        <img src="./images/shop3.png" a alt="" />
                                    </div>
                                    <div className={`${hero.shop4}`}>
                                        <img src="./images/shop4.png" a alt="" />
                                    </div>
                                    <div className={`${hero.shop5}`}>
                                        <img src="./images/shop5.png" a alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* </div> */}
        </>
    )
}

export default Product