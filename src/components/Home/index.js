import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={"Jake Tippit,".split("")}
                idx={10} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={"Web Developer".split("")}
                idx={22} />
                <br />
                </h1>
                <br />
                <div className="h2-box">
                <p>Fullstack Developer / JavaScript / Python</p>
                </div>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        </>
    );
}

export default Home