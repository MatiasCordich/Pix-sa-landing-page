import img04 from '../../assets/cutter.png'
import img05 from '../../assets/topping.png'
import img06 from '../../assets/italy.png'
import './experiencia.css'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {

    const images = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: img04
        },
        {
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            img: img05
        },
        {
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
            img: img06
        },

    ]

    const [image, setImage] = useState(images[0].img)
    const [text, setText] = useState(images[0].text)
    const [select, setSelect] = useState({
        activeBtn: 0,
        btns: [{ id: 0 }, { id: 1 }, { id: 2 }]
    })

    const handleClick = (index: number) => {
        setImage(images[index].img)
        setText(images[index].text)
    }

    const toggleActive = (i: number) => {
        setSelect({ ...select, activeBtn: select.btns[i].id })
    }

    const toogleActiveStyles = (i: number) => {
        if (select.btns[i].id === select.activeBtn) {
            return "active"
        } else {
            return "disable"
        }
    }
    return (
        <section className='experience'>
            <div className='experience__container'>
                <div className='experience__container-box'>
                    <h2 className='section__title'>
                        Food Experience
                        <span className='section__subtitle'>Experience</span>
                    </h2>
                    <div className='experience__content'>
                        <AnimatePresence>
                            <div

                                className='img-text'
                            >
                                <motion.img
                                    key={image ? image : 'empty'}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 10, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    src={image}
                                    alt="image-topping"
                                />

                                <motion.p
                                key={text ? text : 'empty'}
                                initial={{ x: 10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -10, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                >{text}</motion.p>
                            </div>
                        </AnimatePresence>


                        <ul
                            className='experience__btn-text'>
                            <li
                                className={toogleActiveStyles(select.btns[2].id)}
                                onClick={() => { handleClick(2); toggleActive(select.btns[2].id) }}
                            >Italian Recipe
                            </li>
                            <li
                                className={toogleActiveStyles(select.btns[0].id)}
                                onClick={() => { handleClick(0); toggleActive(select.btns[0].id) }}
                            >Perfect cuts
                            </li>
                            <li
                                className={toogleActiveStyles(select.btns[1].id)}
                                onClick={() => { handleClick(1); toggleActive(select.btns[1].id) }}
                            >
                                Fresh toppings
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience