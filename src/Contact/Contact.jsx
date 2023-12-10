import Tilt from 'react-parallax-tilt';
import {useEffect} from 'react';
import './Contact.css';
import {ImLocation} from 'react-icons/im';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {CiLinkedin} from 'react-icons/ci';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
	const handleLocationLinkClick = () => {
		window.open('https://maps.app.goo.gl/XV6Aa93BajNyTDoX9', '_blank');
	};

	useEffect(() => {
		const handleMouseMove = e => {
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
		<>
			<div className=" md:block hidden">
				<Navbar />
				<div className="contact-container ">
					<h1 className="contact-main-title">Get in Touch</h1>
					<div className="contact-cards" id="contact-cards">
						<Tilt className="contact-card contact-card1 contact-socials">
							<div className="contact-card-content">
								<div className="contact-card-info-wrapper">
									<div className="contact-social-card-info">
										<div className="contact-card-info-title">
											<h1 className="contact-social-title">Socials</h1>
										</div>{' '}
										<div className="contact-card-social-links">
											{' '}
											<a
												href="https://instagram.com/abhiyanthriki"
												target="_blank"
												rel="noreferrer"
												className="contact-social-item"
											>
												<FaInstagram size={40} className="contact-socialLogo" />
												Instagram
											</a>
											<a
												href="https://whatsapp.com/channel/0029VaDnLn29sBI0M3UGR20H"
												target="_blank"
												rel="noreferrer"
												className="contact-social-item"
											>
												<FaWhatsapp size={40} className="contact-socialLogo" />
												Whatsapp
											</a>
											<a
												href="https://www.facebook.com/abhiyanthriki/"
												target="_blank"
												rel="noreferrer"
												className="contact-social-item"
											>
												<FaFacebook size={40} className="contact-socialLogo" />
												Facebook
											</a>
											<a
												href="https://www.linkedin.com/company/abhiyanthriki/"
												target="_blank"
												rel="noreferrer"
												className="contact-social-item"
											>
												<CiLinkedin size={40} className="contact-socialLogo" />
												LinkedIn
											</a>
										</div>
									</div>
								</div>
							</div>
						</Tilt>
						<Tilt className="contact-card contact-card2">
							<div className="contact-card-content">
								<div className="contact-address">
									<div className="contact-address-text">
										<ImLocation size={80} className="contact-locationLogo" />
										<h2>
											RSET, <br />
											Rajagiri Valley Road,
											<br />
											Kakkanad.
										</h2>
									</div>
									<div
										className="contact-address-link"
										onClick={handleLocationLinkClick}
									>
										View Location
									</div>
								</div>
							</div>
						</Tilt>
						<Tilt className="contact-card contact-card3">
							<div className="contact-card-content contact-phone">
								<div className=" phone-card-info-title">
									<h1 className="contact-phone-title">Phone</h1>
								</div>
								<div className="contact-phone-list">
									<a
										href="https://wa.link/5qzg7p"
										target="_blank"
										rel="noreferrer"
										className="contact-phone-item"
									>
										<FaPhoneAlt />
										<div className="contact-phone-text">+91 97783-39959</div>
										<div className="contact-phone-text">Adhil P J</div>
									</a>
									<a
										href="https://wa.link/o4gchx"
										target="_blank"
										rel="noreferrer"
										className="contact-phone-item"
									>
										<FaPhoneAlt />
										<div className="contact-phone-text">+91 77364-49302</div>
										<div className="contact-phone-text">Sayujya Salim</div>
									</a>
									<a
										href="https://wa.link/yyhtw8"
										target="_blank"
										rel="noreferrer"
										className="contact-phone-item"
									>
										<FaPhoneAlt />
										<div className="contact-phone-text">+91 90376-51691</div>
										<div className="contact-phone-text">Haidrin Joseph</div>
									</a>
								</div>
							</div>
						</Tilt>
					</div>
				</div>
			</div>
			<div className="md:hidden block mx-auto h-screen">
				<Navbar />
				<div className='text-4xl w-full px-2 text-[white] text-center font-["Monument"]'>
					GET IN TOUCH
				</div>
				<div className='flex flex-col gap-3  w-5/6 mx-auto max:[400px]:my-5 my-6 font-["mono"]'>
					<div className="basis-1/2 rounded-lg flex flex-col text-white text-center bg-[black] bg-opacity-10 shadow-[0_3px_10px_rgb(255,255,0,0.42)] p-4 gap-2 text-xl">
						<div className="text-3  xl mb-2 flex"> Socials</div>
						<div className="flex flex-row gap-10 items-center">
							<FaInstagram className="" />
							<a
								href="https://instagram.com/abhiyanthriki"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								Instagram
							</a>
						</div>
						<div className="flex flex-row gap-10 items-center">
							<FaWhatsapp className="" />
							<a
								href="https://whatsapp.com/channel/0029VaDnLn29sBI0M3UGR20H"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								Whatsapp
							</a>
						</div>
						<div className="flex flex-row gap-10 items-center">
							<FaFacebook className="" />
							<a
								href="https://www.facebook.com/abhiyanthriki/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								Facebook
							</a>
						</div>
						<div className="flex flex-row gap-10 items-center">
							<CiLinkedin className="" />
							<a
								href="https://www.linkedin.com/company/abhiyanthriki/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								LinkedIn
							</a>
						</div>
					</div>
					<div className="basis-1/4 rounded-lg flex flex-row bg-black bg-opacity-10 text-white p-4 shadow-[0_3px_10px_rgb(255,255,0,0.42)]">
						<div className="flex flex-col items-center  justify-center basis-1/4">
							<ImLocation size={40} className="" />
						</div>

						<div className="flex flex-col items-center justify-center text-center mx-auto">
							<div className="text-lg">
								RSET, <br />
								Rajagiri Valley Road, Kakkanad.
							</div>
						</div>
						<div
							className="flex items-center text-center border-2 p-1 rounded-md h-1/2 my-auto"
							onClick={handleLocationLinkClick}
						>
							View Location
						</div>
					</div>
					<div className="basis-1/4 rounded-lg bg-black bg-opacity-10 text-white p-4 text-base whitespace-nowrap mb-2 shadow-[0_3px_10px_rgb(255,255,0,0.42)]">
						<div className="text-2xl mb-1">Phone</div>
						<a
							href="https://wa.link/5qzg7p"
							target="_blank"
							rel="noreferrer"
							className=" flex items-center gap-2 text-sm mb-1 justify-between "
						>
							<div className="flex flex-row gap-2 items-center">
								<FaPhoneAlt />
								<div className="">+91 97783-39959</div>
							</div>
							<div className="mx-auto">Adhil P J</div>
						</a>
						<a
							href="https://wa.link/o4gchx"
							target="_blank"
							rel="noreferrer"
							className=" flex items-center gap-3 text-sm mb-1 justify-between"
						>
							<div className="flex flex-row gap-2 items-center">
								<FaPhoneAlt />
								<div className="">+91 77364-49302</div>
							</div>
							<div className="mx-auto">Sayujya Salim</div>
						</a>
						<a
							href="https://wa.link/yyhtw8"
							target="_blank"
							rel="noreferrer"
							className=" flex items-center gap-2 text-sm mb-1 justify-between"
						>
							<div className="flex flex-row gap-2 items-center">
								<FaPhoneAlt />
								<div className="">+91 90376-51691</div>
							</div>
							<div className="mx-auto">Haidrin Joseph</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
