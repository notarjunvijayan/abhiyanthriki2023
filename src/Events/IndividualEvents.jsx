import { useParams } from 'react-router-dom';
import eventData from './EventsData.json';
import './IndividualEvents.css';
import Navbar from '../Navbar/Navbar';

function IndividualEvent() {
  const { route } = useParams();
  console.log(route);
  const event = eventData.find((event) => event.route === route);

  if (!event) {
    return <div>Event does not exist</div>;
  }
  const handleRegClick = (reglink) => {
    window.open(reglink, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className='event-details-container'>
        <div className='event-details-content'>
          <div className='event-details-poster'>
            <img
              src={event.imageurl}
              alt=''
              className='event-details-posterImg'
            />
            {/* <div className="imgplaceholder"></div> */}
          </div>
          <div className='event-details-textcontent'>
            <div className='event-details-info'>
              <div className='event-details-title'> {event.title}</div>
              <div className='event-details-description'>
                {event.description}
              </div>
            </div>
            <div className='event-details-regdetails'>
              <div className='event-details-date'>{event.date}</div>
              <div className='event-details-poc'>{event.time}</div>{' '}
              {(event.active == 1 || event.active == 2) && (
                <>
                  {' '}
                  <div className='event-details-register'>
                    <button
                      className='event-details-register-button'
                      onClick={() => handleRegClick(event.reglink)}
                    >
                      Register
                    </button>
                  </div>
                </>
              )}
              {event.active == 0 && (
                <>
                  {' '}
                  <div className='event-card-button-ended	'>Event ended!</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualEvent;
