import Threescene from "../Threescene/Threescene";
import "./Home.css";
function Home() {
	const isMobile = window.innerWidth < 768;
	return (
		<div className={`home-container ${isMobile == true ? "bg-[url('/Images/bg-static.jpg')]" : ""}`}>
			<div className={`canvas-container ${isMobile == true ? "bg-[url('/Images/bg-static.jpg')]" : ""}`}>
				<Threescene />
			</div>
		</div>
	);
}

export default Home;
