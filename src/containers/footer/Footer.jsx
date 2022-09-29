import React from 'react'
import './footer.css';
import social from '../../assets/social.svg';

const Footer = () => {
  return (
    <footer>
      <div className='footer__workspace'>
        <div className='footer__containet_data'>
          <div className='footer__logo-links'>
            <p><a href='#OkHelp'>OkHelp</a></p>
          </div>
          <div className='footer__media-container'>
            <div className='footer__suportdata-container'>
              <div className='footer__phonenumber-container'>
                <div className='footer__phonenumber-logo'>
                  
                </div>
                <div className='footer__phonenumber'>
                  <p><a href='#support__phonenumber'>38 066 077 56 46</a></p>
                </div>
              </div>
              <div className='footer__email-container'>
                <div className='footer__email-logo'>
                  
                </div>
                <div className='footer__email'>
                  <p><a href='#support__email'>okhelp@gmail.com</a></p>
                </div>
              </div>
            </div> 
              <div className='footer__social-link'>
                <a href='#social__telegram'><img src={social} alt="telegram" /></a>
                <a href='#social__twiter'><img src={social} alt="twiter" /></a>
                <a href='#social__linkedin'><img src={social} alt="linkedin" /></a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer