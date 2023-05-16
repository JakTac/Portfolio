import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import { serviceId, templateId, publicKey } from './keys';
import './index.scss';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
        emailjs
          .sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey,
          )
          .then(() => {
                alert('Message successfully sent!')
                form.current.name.value = ""
                form.current.email.value = ""
                form.current.subject.value = ""
                form.current.message.value = ""
            },
            () => {
                alert('Message failed to be sent')
            }
          )
      }

    return (
        <>
        <div className='container contact-page'>
            <div className='contact-zone'>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                            <h1>
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Contact Me".split("")}
                            idx={15}
                            />
                        </h1>
                        <p>
                            I am actively seeking full-time employment or internship opportunities. Please do not hesitate to reach out using the form below should you have any queries or alternative requests. 
                        </p>
                        <ul className='list'>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;