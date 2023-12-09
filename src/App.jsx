import './App.css';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Home from './Home/Home';
import IndividualEvents from './Events/IndividualEvents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {' '}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:route' element={<IndividualEvents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
