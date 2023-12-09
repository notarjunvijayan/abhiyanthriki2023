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
  };

  const handleEventClick = (index) => {
    const newShowRegisterSections = Array(eventsData.length).fill(false);
    newShowRegisterSections[index] = !showRegisterSections[index];
    setShowRegisterSections(newShowRegisterSections);
  };

  const filteredEvents = events.filter((event) => {
    return filterEvents === 'technical' ? event.technical : !event.technical;
  });

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
        <div className='event-content'>
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
                {event.active == 1 && (
                  <>
                    {' '}
                    <button className='event-card-button event-register-button'>
                      Register
                    </button>
                  </>
                )}
                {event.active == 0 && (
                  <>
                    {' '}
                    <div className='event-card-button event-register-button'>
                      Event ended!
                    </div>
                  </>
                )}
                {event.active == 2 && (
                  <>
                    {' '}
                    <div className='event-card-button coming-soon-button'>
                      Coming soon!
                    </div>
                  </>
                )}{' '}
                {event.active !== 2 && (
                  <>
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
