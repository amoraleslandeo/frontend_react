import React from 'react'
import { FaGithubAlt, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://www.github.com/amoraleslandeo' target='_blank'>
                <div>
                    <FaGithubAlt />
                </div>
            </a>
            <a href='https://www.linkedin.com/in/alejandro-morales-landeo/' target='_blank'>
                <div>
                    < FaLinkedinIn />
                </div>
            </a>

            <a href="http://web.whatsapp.com/send?text=Hello I'm glad to meet you, please what can I do for you?&phone=+595985850501" target='_blank'>
                <div>
                    <FaWhatsapp />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia