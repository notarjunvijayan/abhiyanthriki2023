import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './Loader/Loader';
import Home from './Home/Home';
const Contact = lazy(() => import('./Contact/Contact'));
const Events = lazy(() => import('./Events/Events'));
const IndividualEvents = lazy(() => import('./Events/IndividualEvents'));

function App() {
  useEffect(() => {
    const ratio = 0.05;
    let x;
    let y;

    const handleMouseMove = (e) => {
      x = e.pageX;
      y = e.pageY;
    };

    const animation = () => {
      const z1 = document.getElementsByClassName('z-1')[0];
      const z2 = document.getElementsByClassName('z-2')[0];
      const z3 = document.getElementsByClassName('z-3')[0];

      if (z1 && z2 && z3) {
        z1.style.transform = `translate(${x * ratio}px, ${y * ratio}px)`;
        z2.style.transform = `translate(${(x * ratio) / 2}px, ${
          (y * ratio) / 2
        }px) rotate(217deg)`;
        z3.style.transform = `translate(${(x * ratio) / 3}px, ${
          (y * ratio) / 3
        }px) rotate(71deg)`;
      }

      requestAnimationFrame(animation);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animation();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='bg'>
        <div className='z-3'>
          <div className='tile top-left animate-opacity freq-5'></div>
          <div className='tile top-right animate-opacity freq-9'></div>
          <div className='tile bottom-left animate-opacity freq-7'></div>
          <div className='tile bottom-right animate-opacity freq-10'></div>
        </div>
        <div className='z-2'>
          <div className='tile top-left animate-opacity freq-9 delay-2'></div>
          <div className='tile top-right animate-opacity freq-5 delay-2'></div>
          <div className='tile bottom-left animate-opacity freq-6 delay-4'></div>
          <div className='tile bottom-right animate-opacity freq-10 delay-4'></div>
        </div>
        <div className='z-1'>
          <div className='tile top-left animate-opacity freq-7 delay-2'></div>
          <div className='tile top-right animate-opacity freq-5 delay-4'></div>
          <div className='tile bottom-left animate-opacity freq-9 delay-2'></div>
          <div className='tile bottom-right animate-opacity freq-5 delay'></div>
        </div>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/contact-us'
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path='/events'
            element={
              <Suspense fallback={<Loader />}>
                <Events />
              </Suspense>
            }
          />
          <Route
            path='/events/:route'
            element={
              <Suspense fallback={<Loader />}>
                <IndividualEvents />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
