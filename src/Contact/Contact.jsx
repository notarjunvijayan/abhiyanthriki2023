import Tilt from 'react-parallax-tilt';
import { useEffect } from 'react';
import './Contact.css';
import { ImLocation } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const handleLocationLinkClick = () => {
    window.open('https://maps.app.goo.gl/XV6Aa93BajNyTDoX9', '_blank');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName('contact-card');
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    document
      .getElementById('contact-cards')
      .addEventListener('mousemove', handleMouseMove);

    return () => {
      document
        .getElementById('contact-cards')
        .removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='contact-container'>
      <h1 className='contact-main-title'>Get in Touch</h1>
      <div className='contact-cards' id='contact-cards'>
        <Tilt className='contact-card contact-card1 contact-socials'>
          <div className='contact-card-content'>
            <div className='contact-card-info-wrapper'>
              <div className='contact-social-card-info'>
                <div className='contact-card-info-title'>
                  <h1 className='contact-social-title'>Socials</h1>
                </div>{' '}
                <div className='contact-card-social-links'>
                  {' '}
                  <a
                    href='https://instagram.com/abhiyanthriki'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-social-item'
                  >
                    <FaInstagram size={40} className='contact-socialLogo' />
                    @abhiyanthriki
                  </a>
                  <a
                    href='https://whatsapp.com/channel/0029VaDnLn29sBI0M3UGR20H'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-social-item'
                  >
                    <FaWhatsapp size={40} className='contact-socialLogo' />
                    Whatsapp
                  </a>
                  <a
                    href='https://www.facebook.com/abhiyanthriki/'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-social-item'
                  >
                    <FaFacebook size={40} className='contact-socialLogo' />
                    @abhiyanthriki
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt
          className='contact-card contact-card2'
        >
          <div className='contact-card-content'>
            <div className='contact-address'>
              <div className='contact-address-text'>
                <ImLocation size={80} className='contact-locationLogo' />
                <h2>
                  RSET, <br />
                  Rajagiri Valley Road,
                  <br />
                  Kakkanad.
                </h2>
              </div>
              <div
                className='contact-address-link'
                onClick={handleLocationLinkClick}
              >
                View Location
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt className='contact-card contact-card3'>
          <div className='contact-card-content contact-phone'>
            <div className=' phone-card-info-title'>
              <h1 className='contact-social-title'>Phone</h1>
            </div>
            <div className='contact-phone-list'>
              <a
                href='https://wa.link/qvqzfu'
                target='_blank'
                rel='noreferrer'
                className='contact-phone-item'
              >
                <FaPhoneAlt />
                <div className='contact-phone-text'>+91 90726-52467</div>
                <div className='contact-phone-text'>Raphael Tony</div>
              </a>
              <a
                href='https://wa.link/ku72cf'
                target='_blank'
                rel='noreferrer'
                className='contact-phone-item'
              >
                <FaPhoneAlt />
                <div className='contact-phone-text'>+91 85898-50153</div>
                <div className='contact-phone-text'>Sanjana Nair</div>
              </a>
              <a
                href='https://wa.link/3ll3nh'
                target='_blank'
                rel='noreferrer'
                className='contact-phone-item'
              >
                <FaPhoneAlt />
                <div className='contact-phone-text'>+91 77366-93388</div>
                <div className='contact-phone-text'>Newin Antony</div>
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Contact;

/*


		</div>

*/
