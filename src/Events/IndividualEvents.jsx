import {useParams} from 'react-router-dom';
import eventData from './EventsData.json';
import './IndividualEvents.css';

function IndividualEvent() {
	const {route} = useParams();
	console.log(route);
	const event = eventData.find(event => event.route === route);

	if (!event) {
		return <div>Event does not exist</div>;
	}

	return (
		<div className="event-details-container">
			<div className="event-details-content">
				<div className="event-details-poster">
					{/* <img src={eventPoster} alt="" className="event-details-posterImg" /> */}
					<div className="imgplaceholder"></div>
				</div>
				<div className="event-details-textcontent">
					<div className="event-details-title"> {event.title}</div>
					<div className="event-details-description">
					{event.description}
					</div>
					<div className="event-details-date">DATE: 15-12-2023</div>
					<div className="event-details-poc">person1 - number</div>
					<div className="event-details-register">
						<button className="event-details-register-button">REGISTER</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IndividualEvent;
