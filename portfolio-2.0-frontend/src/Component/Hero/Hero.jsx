/* eslint-disable react/no-unescaped-entities */
import './Hero.css'
import react from '../../assets/images/react.png'
import tailwind from '../../assets/images/tailwind.png'
import javascript from '../../assets/images/javascript.png'
import nodejs from '../../assets/images/nodejs.png'
import pp from '../../assets/images/pp.jpg'
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
    return (
        <section id='hero' className='hero-container'>
            <div className='hero-content'>
                <h2>Hello there! 👋 I'm<br /> Jisan Molla,</h2>
                <h4>a <span style={{color: 'aquamarine',fontWeight: 'bold'}}>
                    <Typewriter
                        words={['Web Developer', 'Front End Web Developer', 'Programmer']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span> </h4>
                <p>on a mission to craft digital experiences that captivate and inspire. My journey into the world of web development began with a curiosity for technology and a passion for problem-solving. Armed with a toolkit that includes MongoDB, Express.js, React.js, and Node.js, I'm ready to tackle any challenge that comes my way. I'm not just a developer; I'm an artist, weaving together code and creativity to build immersive web applications that leave a lasting impression. Let's collaborate and create something extraordinary together!

</p>
            </div>
            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src={react} alt="" />
                    </div>
                    <img src={pp} alt="" />
                </div>
                <div>
                    <div className='tech-icon'>
                        <img src={tailwind} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={javascript} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={nodejs} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;