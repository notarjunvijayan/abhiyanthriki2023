import {useState, useEffect} from 'react';
import eventsData from './EventsData.json';
import { useNavigate } from 'react-router-dom';

function Events() {
	const navigate = useNavigate();

	const [filterEvents, setFilterEvents] = useState('technical');
	const [events, setEvents] = useState([]);
	const [showRegisterSections, setShowRegisterSections] = useState([]);

	useEffect(() => {
		setEvents(eventsData);
		setShowRegisterSections(Array(eventsData.length).fill(false));
	}, []);

	const handleClick = buttonType => {
		setFilterEvents(buttonType);
	};

	const handleEventClick = index => {
		const newShowRegisterSections = Array(eventsData.length).fill(false);
		newShowRegisterSections[index] = !showRegisterSections[index];
		setShowRegisterSections(newShowRegisterSections);
	};

	const filteredEvents = events.filter(event => {
		if (filterEvents === 'technical') {
			return event.technical;
		} else if (filterEvents === 'non-technical') {
			return !event.technical;
		}
		return true;
	});

	return (
		<div className="flex flex-col bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 items-center justify-around  gap-20 my-20 w-screen mx-auto">
			<div className="text-7xl select-none font-['monument']">Events</div>

			<div className="flex flex-row justify-evenly items-center w-screen">
				<div className="bg-[#e5ff00] p-2 rounded-xl ">
					<button
						className="text-black font-bold md:text-2xl text-base font-['monument']"
						onClick={() => handleClick('technical')}
					>
						TECHNICAL
					</button>
				</div>
				<div className="bg-[#e5ff00] p-2 rounded-xl">
					<button
						className="text-black font-bold md:text-2xl text-base font-['monument']"
						onClick={() => handleClick('non-technical')}
					>
						NON-TECHNICAL
					</button>
				</div>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 w-full gap-10 md:pl-8 md:px-10 px-4">
				{filteredEvents.map((event, index) => (
					<div
						key={event.id}
						className="relative w-[65%] mx-auto bg-[#343434] rounded-2xl transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02] hover:shadow-xl m-2 p-3 cursor-pointer md:text-base text-[0.45rem] group flex flex-col justify-between w-full items-center gap-2 font-Grotesk"
						onClick={() => handleEventClick(index)}
					>
						<div className="relative w-full h-full overflow-hidden rounded-2xl ">
							<img
								src="/Images/event2.jpg"
								className="w-full h-full object-cover"
								alt="Event"
							/>
							<div className="absolute inset-0 flex flex-col items-center justify-end bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-out opacity-0 group-hover:opacity-100">
								<div className="text-white text-center mb-2 transition-all duration-300 ease-out transform group-hover:translate-y-[-550%]">
									{event.title}
								</div>
							</div>
						</div>
						<div className="flex w-full mt-2">
							<button className="flex-1 text-white bg-[#343434] px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 ease-out">
								Register
							</button>
							<button onClick={() => {
            navigate(`/events/${event.route}`);
          }} className="flex-1 text-white bg-[#343434] px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 ease-out">
								Explore
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Events;
