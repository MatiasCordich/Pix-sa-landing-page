import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import img01 from '../../assets/img-01.png'
import img02 from '../../assets/img-02.png'
import img03 from '../../assets/img-03.png'
import './hero.css'

const Hero = () => {


  const images = [img01, img02, img03]

  const [image, setImage] = useState(images[0])

  return (
    <header className='hero'>
      <div className='hero-box'>
        <div className='hero_content'>
          <div className='box-1'>
            <AnimatePresence>
              <div
                className='img-box'>
                <motion.img
                  key={image ? image : 'empty'}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className='hero-img-box' src={image} alt="pizza-img" />
              </div>
            </AnimatePresence>


            <div className='pizza-btns'>
              {
                images.map((image, index) =>
                  <img
                    key={index}
                    src={image}
                    className='hero-img w-3'
                    onClick={() => setImage(image)}
                    alt="pizza-img" />
                )
              }
            </div>
            <div className='polygon'></div>
            <div className='polygon-2'></div>
          </div>
          <div className='box-2'>
            <h2>It's not just Pizza</h2>
            <h2>It's <span>Pix-sa!</span></h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, dolorem ducimus.</p>
            <a href="">See more</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero