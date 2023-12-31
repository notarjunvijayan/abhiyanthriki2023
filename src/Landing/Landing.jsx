import Navbar from '../Navbar/Navbar.jsx';
import eventsData from '../Events/EventsData.json';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Carousel from './Carousel.jsx';

function Landing() {
	const navigate = useNavigate();

	const [activeEventIndex, setActiveEventIndex] = useState(null);

	const handleEventClick = index => {
		setActiveEventIndex(activeEventIndex === index ? null : index);
	};

	return (
		<div className="font-['mono']">
			{/* bg-[url('/Images/bg-static.jpeg')] */}
			<Navbar />

			<div className="h-[100vh] flex flex-col items-center justify-around">
				<div className=" flex flex-col justify-center items-center">
					<div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-[#fff] text-transparent bg-clip-text font-['Monument'] text-4xl mx-auto text-center max-[380px]:text-3xl">
						ABHIYANTHRIKI
					</div>

					<div className="font-['Monument'] text-white text-3xl max-[380px]:text-2xl text-center">
						2023
					</div>
				</div>

				<div className="text-white text-2xl text-center items-center gap-20 flex flex-col mb-20">
					<div>
						Where Innovation <br />
						Takes Flight!
					</div>

					<div className="px-2">
						Don&apos;t just attend; be part of the{' '}
						<span className="font-['Monument'] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text ">
							REVOLUTION
						</span>
						!
					</div>
				</div>
			</div>

			<div className="select-none text-white text-center py-2">
				<div className="text-3xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text font-['Monument'] text-center">
					<span className="text-white font-['Monument']">OUR</span> SPONSORS
				</div>

				<div className="text-4xl h-screen flex items-center justify-evenly flex-col ">
					<div className="mx-auto text-center flex items-center justify-center text-white text-xl border border-2 border-white mx-5 rounded-2xl">
						<a href="https://www.techmindz.com/" target="_blank" rel="noreferrer noopener">
							<img
								src="/Images/techmindz-white.png"
								alt="title sponsor logo"
								className=" px-2 mx-auto"
								loading="lazy"
							/>
						</a>
					</div>
					TITLE SPONSOR
				</div>
				<div className="text-3xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text font-['Monument'] text-center">
					<span className="text-white font-['Monument']">OUR</span> SPONSORS
				</div>
				<div className="text-2xl h-screen flex items-center justify-evenly flex-col -mt-[10%]">
					<div className="mx-auto text-center text-white text-xl flex flex-col gap-6 ">
						<div className="border border-2 border-white  mx-4 rounded-2xl p-4">
							<a href="https://www.globaledu.in/" target="_blank" rel="noreferrer noopener">
								<img
									src="/Images/GLOBAL_logo.jpg"
									alt="global sponsor logo"
									className="w-3/4 mx-auto"
									loading="lazy"
								/>
							</a>
						</div>
						<div className="border border-2 border-white  mx-4 rounded-2xl p-4">
							<a href="https://www.hubspire.com/" target="_blank" rel="noreferrer noopener">
								<img
									src="/Images/Hubspire.jpg"
									alt="hubspire sponsor logo"
									className="mx-auto"
									loading="lazy"
								/>
							</a>
						</div>
					</div>
					<div className="">PLATINUM SPONSORS</div>
				</div>
				<div className="text-3xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text font-['Monument'] text-center">
					<span className="text-white font-['Monument']">OUR</span> SPONSORS
				</div>
				<div className="text-2xl h-screen flex items-center justify-evenly flex-col -mt-[10%]">
					<div className="mx-auto text-center text-white text-xl flex flex-col max-[400px]:gap-6 gap-10">
						<div className="border border-2 border-white  mx-4 rounded-2xl p-4">
							<a href="https://bulwark.biz/" target="_blank" rel="noreferrer noopener">
								<img
									src="/Images/Bulwark.png"
									alt="Bulwark sponsor logo"
									className="w-3/4 mx-auto"
									loading="lazy"
								/>
							</a>
						</div>
						<div className="border border-2 border-white  mx-4 rounded-2xl p-4">
							<a href="https://dewtonindia.com/" target="_blank" rel="noreferrer noopener">
								<img
									src="/Images/DewtonLED.png"
									alt="DewtonLED sponsor logo"
									className="mx-auto"
									loading="lazy"
								/>
							</a>
						</div>
						<div className="border border-2 border-white  mx-4 rounded-2xl p-4" target="_blank" rel="noreferrer noopener">
							<a href="https://www.unimoni.in/">
								<img
									src="/Images/Unimoni.png"
									alt="Unimoni sponsor logo"
									className="mx-auto"
									loading="lazy"
								/>
							</a>
						</div>
					</div>
					<div className="">BRONZE SPONSORS</div>
				</div>
			</div>

			<div className="h-[100%] my-4">
				<div className="text-3xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text font-['Monument'] text-center">
					<span className="text-white font-['Monument']">ABOUT</span> A3k
				</div>
				<img
					src="/Images/rset.jpg"
					className="px-5 max-[400px]:my-5 my-12"
					loading="lazy"
				/>
				<div className="text-white px-6 text-sm">
					<span className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text text-lg font-bold text-base">
						Abhiyanthriki
					</span>{' '}
					RSET&apos;s biennial tech fest, Abhiyanthriki, isn&apos;t merely an
					event; it&apos;s a pulsating emotion of excellence and invention!
					<br />
					<br />
					Join us for a two-day tech extravaganza — a playground for tech
					contests, workshops, hackathons, and exhilarating stalls, providing a
					platform for various scholastic and technical achievements.
					<br />
					<br />
					This year, we&apos;re not just embracing sustainability; we&apos;re
					transforming waste into a sustainable spectacle.
					<br />
					<br />
					<span className="font-bold text-base bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text text-lg">
						Abhiyanthriki
					</span>{' '}
					Don&apos;t just attend; be part of the revolution!
				</div>
			</div>

			{/* <div className="w-[80%] mx-auto flex flex-col gap-2  pb-10">
				<Carousel images={imagesCarousel1} />
				<Carousel images={imagesCarousel2} />
				<Carousel images={imagesCarousel3} />
			</div> */}

			<Carousel />

			<div className="h-[100%] select-none">
				<div className="text-3xl max-[400px]:text-[1.6rem] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text font-['Monument'] text-center my-20">
					<span className="text-white font-['Monument']">EVENT</span> SHOWCASE
				</div>
				<div className="grid grid-cols-1 gap-10 md:pl-8 md:px-10 pb-6 px-4 select-none">
					{eventsData.slice(0, 6).map((event, index) => (
						<div
							key={event.id}
							className="relative px-6 mx-auto rounded-2xl transition-all duration-300 ease-out hover:animate-step-end active:scale-[1.02] active:shadow-xl m-2 cursor-pointer md:text-base text-[0.45rem] group flex flex-col justify-between w-full items-center gap-1"
							onClick={() => handleEventClick(index)}
						>
							<div className="relative w-full h-full overflow-hidden rounded-2xl">
								<img
									src={event.imageurl}
									className="w-full h-full object-cover"
									alt="Event Image"
									loading="lazy"
								/>
								{activeEventIndex === index && (
									<div className="absolute inset-0 flex flex-col items-center justify-end bg-black transition-opacity duration-300 ease-out opacity-80">
										<div className="flex flex-col gap-4 text-[#e5ff00] text-center mb-2 transition-transform duration-300 ease-out transform max-[400px]:-translate-y-16 -translate-y-20 text-[2.15rem] font-bold">
											<div className="text-center mx-auto max-[400px]:text-3xl text-4xl">
												{event.title}
											</div>
											<div>
												{event.reglink && (
													<button
														onClick={() => {
															navigate(`/events/${event.route}`);
														}}
														target="_blank"
														rel="noopener noreferrer"
														className="bg-[#e5ff00] text-black px-4 py-2 rounded-md active:rounded-3xl active:scale-90 transition-all duration-300 ease-out text-xl"
													>
														Know More!
													</button>
												)}
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
				<div className="w-screen text-center text-white text-2xl my-12 pb-12 px-6">
					Check out more of the events happening at{' '}
					<span className="font-['Monument'] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] to-white text-transparent bg-clip-text ">
						A3K{' '}
					</span>
					!
					<div className="flex flex-row items-center">
						<div className="w-1/2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="h-20 w-20 mx-auto"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
								/>
							</svg>
						</div>
						<div>
							<button
								onClick={() => {
									navigate(`/events`);
								}}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#e5ff00] text-black p-2 font-bold text-3xl rounded-md"
							>
								EVENTS
							</button>
						</div>
					</div>
				</div>
				<div className="w-screen text-center text-white text-2xl my-12 pb-12 px-6">
					Any queries ? <br />
					Contact us !
					<div className="flex flex-row items-center">
						<div className="w-full ">
							<button
								onClick={() => {
									navigate(`/contact-us`);
								}}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#e5ff00] text-black p-2 font-bold text-3xl rounded-md"
							>
								CONTACT
							</button>
						</div>
						<div className="w-1/2 ml-auto">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="h-20 w-20"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
