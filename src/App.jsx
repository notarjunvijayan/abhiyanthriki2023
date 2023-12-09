import "./App.css";
import Contact from "./Contact/Contact";
import Events from "./Events/Events";
import Home from "./Home/Home";
import IndividualEvents from "./Events/IndividualEvents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<div class="bg">
				<div class="z-3">
					<div class="tile top-left animate-opacity freq-5"></div>
					<div class="tile top-right animate-opacity freq-9"></div>
					<div class="tile bottom-left animate-opacity freq-7"></div>
					<div class="tile bottom-right animate-opacity freq-10"></div>
				</div>
				<div class="z-2">
					<div class="tile top-left animate-opacity freq-9 delay-2"></div>
					<div class="tile top-right animate-opacity freq-5 delay-2"></div>
					<div class="tile bottom-left animate-opacity freq-6 delay-4"></div>
					<div class="tile bottom-right animate-opacity freq-10 delay-4"></div>
				</div>
				<div class="z-1">
					<div class="tile top-left animate-opacity freq-7 delay-2"></div>
					<div class="tile top-right animate-opacity freq-5 delay-4"></div>
					<div class="tile bottom-left animate-opacity freq-9 delay-2"></div>
					<div class="tile bottom-right animate-opacity freq-5 delay"></div>
				</div>
			</div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact-us" element={<Contact />} />
					<Route path="/events" element={<Events />} />
					<Route path="/events/:route" element={<IndividualEvents />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
