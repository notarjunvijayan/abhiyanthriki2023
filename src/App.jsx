import './App.css';
import Navbar from './Navbar/Navbar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Home from './Home/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/contact-us',
    element: <Contact />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/events',
    element: <Events />,
    errorElement: <div>Something went wrong</div>,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <div className='canvas-container'>
        <RouterProvider router={router} />
      </div>
      <div className='container-page'></div>
    </>
  );
}

export default App;
