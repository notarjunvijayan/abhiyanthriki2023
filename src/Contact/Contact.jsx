import Tilt from 'react-parallax-tilt';
import { useEffect } from 'react';
import './Contact.css';
import { ImLocation } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

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
    <div className='contact-cards' id='contact-cards'>
      <Tilt>
        <div className='contact-card' onClick={handleLocationLinkClick}>
          <div className='contact-card-content'>
            <div className='contact-card-info-wrapper'>
              <div className='contact-card-info'>
                <div className='contact-card-info-title'>
                  <div className='contact-address'>
                    <div className='contact-address-text'>
                      <ImLocation size={80} className='contact-locationLogo' />
                      <h2>
                        RSET <br />
                        RAJAGIRI VALLEY ROAD
                        <br />
                        KAKKANAD
                      </h2>
                    </div>
                    <a
                      href='https://maps.app.goo.gl/XV6Aa93BajNyTDoX9'
                      target='_blank'
                      rel='noreferrer'
                      className='contact-address-link'
                      onClick={handleLocationLinkClick}
                    >
                      VIEW LOCATION
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className='contact-card'>
          <div className='contact-card-content'>
            <div className='contact-card-info-wrapper'>
              <div className='contact-card-info'>
                <div className='contact-card-info-title'>
                  <h3>test</h3>
                  <h4>test</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className='contact-card contact-socials'>
          <div className='contact-card-content'>
            <div className='contact-card-info-wrapper'>
              <div className='contact-social-card-info'>
                <div className='contact-card-info-title'>
                  <h1 className='contact-social-title'>SOCIALS</h1>
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
        </div>
      </Tilt>
      <Tilt>
        <div className='contact-card'>
          <div className='contact-card-content'>
            <div className='contact-card-info-wrapper'>
              <div className='contact-card-info'>
                <div className='contact-card-info-title'>
                  <h3>test</h3>
                  <h4>test</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Contact;

/*


<div className="contact-container" id="contact-container">
			<div className="contact-grid">
				<div className="contact-card contact-address">
					<div className="contact-address-text">
						<img src={locationImage} alt="" className="contact-locationLogo" />
						RSET <br />
						RAJAGIRI VALLEY ROAD
						<br />
						KAKKANAD
					</div>
					<a
						href="https://maps.app.goo.gl/XV6Aa93BajNyTDoX9"
						target="_blank"
						rel="noreferrer"
						className="contact-address-link"
					>
						VIEW LOCATION
					</a>
				</div>
				<div className="contact-card contact-social">
					<div className="contact-social-title">SOCIALS</div>
					<a
						href="https://instagram.com/abhiyanthriki"
						target="_blank"
						rel="noreferrer"
						className="contact-social-item"
					>
						<img src={instagramImage} alt="" className="contact-socialLogo" />
						@ABHIYANTHRIKI
					</a>
					<a
						href="https://whatsapp.com/channel/0029VaDnLn29sBI0M3UGR20H"
						target="_blank"
						rel="noreferrer"
						className="contact-social-item"
					>
						<img src={whatsappImage} alt="" className="contact-socialLogo" />
						Whatsapp
					</a>
					<a
						href="https://www.facebook.com/abhiyanthriki/"
						target="_blank"
						rel="noreferrer"
						className="contact-social-item"
					>
						<img src={facebookImage} alt="" className="contact-socialLogo" />
						@ABHIYANTHRIKI
					</a>
				</div>
				<div className="contact-card contact-title">
					GET IN <br />
					TOUCH
				</div>
				<div className="contact-card contact-phone">
					<div className="contact-phone-title">PHONE</div>
					<div className="contact-phone-list">
						<a
							href="https://wa.link/qvqzfu"
							target="_blank"
							rel="noreferrer"
							className="contact-phone-item"
						>
							<img src={phoneImage} alt="" className="contact-phoneLogo" />
							<div className="contact-phone-text">+91 90726-52467</div>
							<div className="contact-phone-text">RAPHAEL TONY</div>
						</a>
						<a
							href="https://wa.link/ku72cf"
							target="_blank"
							rel="noreferrer"
							className="contact-phone-item"
						>
							<img src={phoneImage} alt="" className="contact-phoneLogo" />
							<div className="contact-phone-text">+91 85898-50153</div>
							<div className="contact-phone-text">SANJANA NAIR</div>
						</a>
						<a
							href="https://wa.link/3ll3nh"
							target="_blank"
							rel="noreferrer"
							className="contact-phone-item"
						>
							<img src={phoneImage} alt="" className="contact-phoneLogo" />
							<div className="contact-phone-text">+91 77366-93388</div>
							<div className="contact-phone-text">NEWVIN ANTONY</div>
						</a>
					</div>
				</div>
			</div>
		</div>

*/
