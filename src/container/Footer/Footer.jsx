import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }



  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <a href="mailto:amoraleslandeo@gmail.com" className='p-text app__footer-card'>
          <img src={images.email} alt="email" />
          amoraleslandeo@gmail.com
        </a>
        <a className='p-text whatsappLinkDesktop app__footer-card' href="http://web.whatsapp.com/send?text=Hello I'm glad to meet you, please what can I do for you?&phone=+595985850501" target='_blank'>
          <img src={images.mobile} alt="mobile" />
          +595 985 850 501
        </a>
        <a className='p-text whatsappLinkMobile app__footer-card' href="whatsapp://send?text=Hello I'm glad to meet you, please what can I do for you?&phone=+595985850501" target='_blank'>
          <img src={images.mobile} alt="mobile" />
          +595 985 850 501
        </a>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        : <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
