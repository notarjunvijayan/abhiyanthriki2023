import { useState, useEffect } from 'react';
import './Events.css';
import eventsData from './EventsData.json';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Events() {
  const navigate = useNavigate();

  const [filterEvents, setFilterEvents] = useState('technical');
  const [events, setEvents] = useState([]);
  const [showRegisterSections, setShowRegisterSections] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
    setShowRegisterSections(Array(eventsData.length).fill(false));
  }, []);

  const handleClick = (buttonType) => {
    setFilterEvents(buttonType);
    const handleClick = () => {
      const contentWindow = document.getElementById('event-content');
      contentWindow.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    handleClick();
  };

  const handleEventClick = (index) => {
    const newShowRegisterSections = Array(eventsData.length).fill(false);
    newShowRegisterSections[index] = !showRegisterSections[index];
    setShowRegisterSections(newShowRegisterSections);
  };

  const filteredEvents = events.filter((event) => {
    return filterEvents === 'technical' ? event.technical : !event.technical;
  });
  const handleRegClick = (reglink) => {
    window.open(reglink, '_blank');
  };
  return (
    <>
      <Navbar />
      <div className='event-container'>
        <div className='event-title'>EVENTS</div>
        <div className='event-toggle-container'>
          <div
            className={`event-toggle event-technical ${
              filterEvents === 'technical'
                ? 'bg-[#e5ff00] text-black'
                : 'text-white bg-black'
            }`}
          >
            <button
              className='event-toggle-button'
              onClick={() => handleClick('technical')}
            >
              TECHNICAL
            </button>
          </div>
          <div
            className={`event-toggle event-nontechnical ${
              filterEvents === 'non-technical'
                ? 'bg-[#e5ff00] text-black'
                : 'text-white bg-black'
            }`}
          >
            <button
              className='event-toggle-button'
              onClick={() => handleClick('non-technical')}
            >
              NON-TECHNICAL
            </button>
          </div>
        </div>
        <div className='event-content' id='event-content'>
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className='event-card'
              onClick={() => handleEventClick(index)}
            >
              <div className='event-image-container'>
                <img src={event.imageurl} className='event-image' alt='' />
                <div className='event-image-overlay'>
                  <div className='event-overlay-title'>{event.title}</div>
                </div>
              </div>
              <div className='event-card-buttons'>
                {event.active == 2 && (
                  <>
                    <div className='event-card-button coming-soon-button event-register-button'>
                      Coming Soon!
                    </div>
                  </>
                )}
                {event.active == 1 && (
                  <>
                    {' '}
                    <button
                      className='event-card-button event-register-button'
                      onClick={() => handleRegClick(event.reglink)}
                    >
                      Register
                    </button>
                  </>
                )}
                {event.active == 0 && (
                  <>
                    {' '}
                    <div className='event-card-button event-register-button'>
                      closed!
                    </div>
                  </>
                )}
                {event.active !== 2 && (
                  <>
                    {' '}
                    <button
                      onClick={() => {
                        navigate(`/events/${event.route}`);
                      }}
                      className='event-card-button event-explore-button'
                    >
                      Explore
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
