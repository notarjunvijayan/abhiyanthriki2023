import "./EventDetails.css";
// import {eventPoster} from "/Images/a3k.jpg"

function EventDetails() {
	return (
		<div className="event-details-container">
			<div className="event-details-content">
				<div className="event-details-poster">
					{/* <img src={eventPoster} alt="" className="event-details-posterImg" /> */}
					<div className="imgplaceholder"></div>
				</div>
				<div className="event-details-textcontent">
					<div className="event-details-title">DRONE SHOW</div>
					<div className="event-details-description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
						distinctio doloremque praesentium aliquam neque expedita vitae
						corporis perferendis quaerat tempore maiores dolorum, recusandae
						velit qui illo, porro cum. Totam, temporibus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
						distinctio doloremque praesentium aliquam neque expedita vitae
						corporis perferendis quaerat tempore maiores dolorum, recusandae
						velit qui illo, porro cum. Totam, temporibus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
						distinctio doloremque praesentium aliquam neque expedita vitae
						corporis perferendis quaerat tempore maiores dolorum, recusandae
						velit qui illo, porro cum. Totam, temporibus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
						distinctio doloremque praesentium aliquam neque expedita
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

export default EventDetails;
