import { useRef } from 'react'
import pizzaVideo from '../../assets/pizza.mp4'
import './about.css'

const About = () => {

    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        videoRef.current?.play()
    }

    const handlePause = () => {
        videoRef.current?.pause()
    }
    return (
        <section className='about'>
            <div className='about_box'>
                <div className='video_box'>
                    <div className='video_content'>
                        <video
                            ref={videoRef}
                            className='video'
                            src={pizzaVideo}
                            loop
                            autoPlay
                        >
                        </video>
                        <div className='btn-video-box'>
                            <button
                                className='btn-video'
                                onClick={handlePlay}>
                                <img src="https://img.icons8.com/ios-glyphs/25/fafafa/play--v1.png" />
                            </button>
                            <button
                                className='btn-video'
                                onClick={handlePause}>
                                <img src="https://img.icons8.com/ios-glyphs/25/fafafa/stop.png" />
                            </button>
                        </div>

                    </div>

                    <div className='box__title'>
                        <h2>
                            About
                            <span data-text="About">About</span>
                        </h2>
                        <ul className='about__links'>
                            <li>
                                <a href="">
                                    <img src="https://img.icons8.com/sf-black-filled/35/181818/facebook.png" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="https://img.icons8.com/sf-black-filled/35/181818/twitter.png" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="https://img.icons8.com/sf-black-filled/35/181818/instagram-new.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='box__text' >
                    <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam totam rerum facere optio perferendis! Aut maiores voluptas quis perspiciatis dolores! Libero odio nihil id harum aperiam explicabo culpa illo adipisci!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero libero architecto corrupti eaque minima nihil quam eum commodi aperiam?
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About