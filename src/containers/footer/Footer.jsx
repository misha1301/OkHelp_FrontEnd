import React from 'react'
import './footer.css';
import social_icon_telegram from '../../assets/Social_Icon_Telegram.svg';
import social_icon_facebook from '../../assets/Social_Icon_Facebook.svg';
import social_icon_linkedin from '../../assets/Social_Icon_linkedin.svg';
import email from '../../assets/Email.svg';
import phone from '../../assets/Phone.svg';


const Footer = () => {
  return (
    <footer>
      <div className='footer__workspace'>
        <div className='footer__container_data'>
          <div className='footer__logo-links'>
            <p><a href='#OkHelp'>OkHelp</a></p>
          </div>
          <div className='footer__line line-center'></div>
          <div className='footer__media-container'>
            <div className='footer__suportdata-container'>
              <div className='footer__phonenumber-container'>
                <div className='footer__phonenumber-logo'>
                  <img src={phone} alt="*" height={"12px"}/>
                </div>
                <div className='footer__phonenumber'>
                  <p className='text__mont-med-black'><a href='#support__phonenumber'>38 066 077 56 46</a></p>
                </div>
              </div>
              <div className='footer__email-container'>
                <div className='footer__email-logo'>
                <img src={email} alt="*" height={"12px"}/>
                </div>
                <div className='footer__email'>
                  <p className='text__mont-med-black'><a href='#support__email'>okhelp@gmail.com</a></p>
                </div>
              </div>
            </div>
            <div className='footer__social-link'>
              <a href='#social__telegram'><img src={social_icon_telegram} alt="telegram" height={"34px"}/></a>
              <a href='#social__twiter'><img src={social_icon_linkedin} alt="twiter" height={"34px"}/></a>
              <a href='#social__linkedin'><img src={social_icon_facebook} alt="linkedin" height={"34px"}/></a>
            </div>
          </div>
        </div>
        <div className='footer__line line-bottom'></div>
      </div>
    </footer>
  )
}

export default Footer