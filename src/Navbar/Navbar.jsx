import "./Navbar.css";
import logo from "./a3k.png";
export default function Navbar() {
	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<a href="/">
						{" "}
						<img src={logo} />
					</a>
				</div>

				<div className="links">
					<div className="link">
						<a href="/events">Events</a>
					</div>
					<div className="link">
						<a href="/contact-us">Contact</a>
					</div>
				</div>
			</nav>
		</>
	);
}
