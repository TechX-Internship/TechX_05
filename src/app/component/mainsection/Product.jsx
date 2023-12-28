import React from 'react'
import hero from './product.module.css'

const Product = () => {
    return (
        <>

            <div className={`${hero.bgclr}`}>
                <div className={`${hero.bgclr}`}>
                    <section className='py-5'>
                        <div className="container">
                            <div className={`${hero.cirone}`}>
                                <div className='pt-5'>
                                    <h1 className={`${hero.txtheading} mt-5`}>
                                        New Jewellery
                                    </h1>
                                    <p className={hero.txtpara}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pelle ntesque non orci in ante viverra finibus ullam corper vitae lacus.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Product