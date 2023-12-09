import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Contact/Contact";
import Events from "./Events/Events";
import Home from "./Home/Home";
import IndividualEvents from "./Events/IndividualEvents";

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
			const z1 = document.getElementsByClassName("z-1")[0];
			const z2 = document.getElementsByClassName("z-2")[0];
			const z3 = document.getElementsByClassName("z-3")[0];

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

		document.addEventListener("mousemove", handleMouseMove);
		animation();

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []); // empty dependency array means this effect will only run once on mount

	return (
		<>
			{/* Your existing JSX code */}
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
