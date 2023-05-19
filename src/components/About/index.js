import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <div className = 'container about-page'>
            <div className = 'about-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray = {"About Me".split("")}
                        idx={15}
                    />
                </h1>
                <div className='p-box'>
                <p>I am a highly ambitious and driven full-stack developer with a passion for UI/UX. I am deeply interested in the intricacies of technology and constantly strive for growth and mastery within the field. With a commitment to excellence and professionalism, I take pride in effectively managing multiple projects and collaborating with others to solve complex problems.</p>
                </div>
                <div className='p-box'>
                <p>As a mission-driven and goal-oriented software engineer, I actively seek new opportunities to learn and apply new coding concepts and languages to real-world projects. Whenever I'm not seated behind a computer, you can find me in the kitchen, whipping up my impeccably made pepperoni pizza.</p>
                </div>
            </div>
            <div className='img-box'>
                    <img className='portrait' src='https://i.imgur.com/3p6PNb9.jpg' alt='A pciture of me'/>
            </div>
        </div>
    )
}

export default About