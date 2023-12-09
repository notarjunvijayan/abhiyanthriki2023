import "./App.css";
// import {useEffect, useState} from 'react';
import Navbar from "./Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact/Contact";
import Events from "./Events/Events";
import Home from "./Home/Home";
import IndividualEvents from "./Events/IndividualEvents";
// import Loader from './Threescene/Loader/Loader';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <div>Something went wrong</div>,
	},
	{
		path: "/contact-us",
		element: <Contact />,
		errorElement: <div>Something went wrong</div>,
	},
	{
		path: "/events",
		element: <Events />,
		errorElement: <div>Something went wrong</div>,
	},
	{
		path: "/events/:route",
		element: <IndividualEvents />,
		errorElement: <div>Something went wrong</div>,
	},
]);

function App() {
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const loadingTimer = setTimeout(() => {
	// 		setLoading(false);
	// 	}, 1500);
	// 	return () => clearTimeout(loadingTimer);
	// }, []);

	return (
		<>
			{/* {loading ? (
				<div className="flex h-screen items-center justify-center bg-black">
					<Loader />
				</div>
			) : ( */}
			<>
				<Navbar />
				<RouterProvider router={router} />
			</>
			{/* )} */}
		</>
	);
}

export default App;
