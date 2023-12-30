import React from 'react'
import Miniheader from '../component/miniheader/Miniheader'
import abt from './about.module.css'
import Customised from '../component/mainsection/Customised'

const page = () => {
  return (
    <>
      <Miniheader />
      <div className={`${abt.bgclr} pt-5`} >
        <section className='pt-5 position-relative '>
          <div className="container" style={{ height: "1500px" }}>
            <div className="d-flex">
              <div className="col-6">
                <div className={`${abt.abouttitle} position-relative`}>
                  <div className={`${abt.cirsix}`}></div>
                  <div className={`${abt.abt}`}>
                    <h1 className={`${abt.txtheading2} mt-5 ms-5`}>
                      ABOUT US
                    </h1>
                    <p className={`${abt.txtpara} ms-5`}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pelle ntesque non orci </p>
                  </div>
                </div>
                <div className={`${abt.arrow12}`}>
                  <img src="./icon/Line12.png" alt="" />
                </div>
                <div className={abt.mision}>
                  <div className={abt.cir3}>
                    <div className={abt.cont2}>
                      <h1 className={`${abt.txtheading4}`}>
                        Our mission
                      </h1>
                      <p className={`${abt.txtpar3}`}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis lentesque non orci in .Lorem ipsum dolor sit amet, c at venenatis lentesque non orci in .Lorem ipsum dolor sit amet, </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <p className={`${abt.txtp}`}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis lentesque non orci in .Lorem ipsum dolor sit amet, nsectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pelle ntesque non orci in</p>

                <div className={abt.vision}>
                  <div className={abt.cir2}>
                    <div className={abt.cont}>
                      <h1 className={`${abt.txtheading3}`}>
                        Our Vision
                      </h1>
                      <p className={`${abt.txtpar}`}>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis nulla. Pellentesque non orci in .Lorem ipsum dolor sit amet, consectetur adipi scing elit. Donec at venenatis lentesque non orci in .Lorem ipsum dolor sit amet, </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={abt.design2}>
            <img src="./icon/design2.png" alt="" />
          </div>
        </section>
        <Customised />
      </div>
    </>
  )
}

export default page