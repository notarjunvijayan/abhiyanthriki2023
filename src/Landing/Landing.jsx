import Navbar from '../Navbar/Navbar.jsx';
import {useState} from 'react';
import './Landing.css';
import eventsData from '../Events/EventsData.json';

function Landing() {
	const [showRegisterSections, setShowRegisterSections] = useState([]);

	const handleEventClick = index => {
		const newShowRegisterSections = Array(eventsData.length).fill(false);
		newShowRegisterSections[index] = !showRegisterSections[index];
		setShowRegisterSections(newShowRegisterSections);
	};

	return (
		<div className="h-screen font-['mono']">
			<Navbar />

			<div className="h-[100%] flex flex-col items-center justify-around">
				<div className="container">
					<div
						className="-mt-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] text-transparent bg-clip-text font-['Monument'] text-4xl mx-auto text-center max-[380px]:text-3xl"
						data-text="ABHIYANTHRIKI"
					>
						ABHIYANTHRIKI
					</div>
					<div className="font-['Monument'] text-white text-3xl max-[380px]:text-2xl text-center">
						2023
					</div>
				</div>

				<div className="text-white text-2xl text-center items-center mt-72 gap-20 flex flex-col mb-20">
					<div>Where Innovation Takes Flight!</div>

					<div>
						Don&apos;t just{' '}
						<span className="font-['Monument'] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] text-transparent bg-clip-text ">
							ATTEND
						</span>
						; be part of the{' '}
						<span className="font-['Monument'] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e5ff00] via-[#e5ff00] text-transparent bg-clip-text ">
							REVOLUTION
						</span>
						!
					</div>
				</div>
			</div>

			<div className="h-[100%] select-none">
				<div className="text-3xl text-[#e5ff00] font-['Monument'] text-center">
					<span className="text-white font-['Monument']">OUR</span> SPONSORS
				</div>
				<div className="mx-auto text-center text-white text-xl my-8">
					TITLE SPONSOR
					<img
						src="/Images/techmindz-white.png"
						alt="title sponsor logo"
						className="w-3/4 mx-auto"
					/>
				</div>
				<div className="mx-auto text-center text-white text-xl flex flex-col gap-6">
					PLATINUM SPONSORS
					<img
						src="/Images/GLOBAL_logo.jpg"
						alt="global sponsor logo"
						className="w-[55%] mx-auto"
					/>
					<img
						src="/Images/Hubspire.jpg"
						alt="hubspire sponsor logo"
						className="w-[55%] mx-auto"
					/>
				</div>
			</div>

			<div className="h-[100%]">
				<div className="text-3xl text-[#e5ff00] font-['Monument'] text-center">
					<span className="text-white font-['Monument']">ABOUT</span> A3k
				</div>
				<img
					src="/Images/rset.jpg"
					className="p-6 rounded-xl max-[400px]:my-3 my-6"
				/>
				<div className="text-white px-6 text-sm">
					<span className="text-[#e5ff00] text-lg">Abhiyanthriki</span>,
					RSET&apos;s biennial technical festival, epitomizes academic
					excellence and innovation. <br />
					<br />
					Spanning two meticulously organized days, it offers a spectrum of
					opportunities, including technical contests, workshops, and creative
					stalls. <br />
					<br />
					Emphasizing sustainability, the event incorporates inventive reuse of
					plastic bottles and circuit boards in its decor. <br />
					<br />
					Abhiyanthriki is more than an event; it&apos;s a distinguished
					platform embodying scholastic and technical achievement.
				</div>
			</div>

			<div className="h-[100%] select-none">
				<div className="text-3xl max-[400px]:text-[1.6rem] text-[#e5ff00] font-['Monument'] text-center my-8">
					<span className="text-white font-['Monument']">EVENT</span> SHOWCASE
				</div>
				<div className="grid grid-cols-1 gap-4 md:pl-8 md:px-10 px-4">
					{eventsData.map((event, index) => (
						<div
							key={event.id}
							className="relative px-6 mx-auto rounded-2xl transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02] hover:shadow-xl m-2 cursor-pointer md:text-base text-[0.45rem] group flex flex-col justify-between w-full items-center gap-1 font-Grotesk"
							onClick={() => handleEventClick(index)}
						>
							<div className="relative w-full h-full overflow-hidden rounded-t-2xl ">
								<img
									src={event.imageurl}
									className="w-full h-full object-cover"
									alt="Event Image"
								/>
								<div className="absolute inset-0 flex flex-col items-center justify-end bg-[#e5ff00] transition-all duration-300 ease-out opacity-0 group-hover:opacity-80">
									<div className="text-black text-center mb-2 transition-all duration-300 ease-out transform md:group-hover:-translate-y-44 group-hover:-translate-y-28 md:text-4xl text-3xl font-bold">
										{event.title}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Landing;
