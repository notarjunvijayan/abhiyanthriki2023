import {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images1 = [
	'/Images/c1.png',
	'/Images/c2.png',
	'/Images/c3.png',
];

const images2 = [
	'/Images/c4.png',
	'/Images/c5.png',
	'/Images/c6.png',
];

const images3 = [
	'/Images/c7.png',
	'/Images/c8.png',
	'/Images/c9.png',
];

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
};

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

function Carousel() {
	const [shuffledImages1, setShuffledImages1] = useState([]);
	const [shuffledImages2, setShuffledImages2] = useState([]);
	const [shuffledImages3, setShuffledImages3] = useState([]);

	useEffect(() => {
		const shuffled1 = [...images1];
		const shuffled2 = [...images2];
		const shuffled3 = [...images3];

		shuffleArray(shuffled1);
		shuffleArray(shuffled2);
		shuffleArray(shuffled3);

		setShuffledImages1(shuffled1);
		setShuffledImages2(shuffled2);
		setShuffledImages3(shuffled3);
	}, []);
	return (
		<div className=" my-8">
			<Slider {...settings}>
				{shuffledImages1.map((image, index) => (
					<div key={`carousel1-${index}`} className="px-6">
						<img
							src={image}
							alt={`Image 1-${index}`}
							width={950}
							height={800}
							className="object-cover w-full max-[400px]:h-48 h-64 rounded-3xl"
							loading="lazy"
						/>
					</div>
				))}
			</Slider>

			<Slider {...settings}>
				{shuffledImages2.map((image, index) => (
					<div key={`carousel2-${index}`} className="px-6">
						<img
							src={image}
							alt={`Image 2-${index}`}
							width={950}
							height={800}
							className="object-cover w-full max-[400px]:h-48 h-64 rounded-3xl"
							loading="lazy"
						/>
					</div>
				))}
			</Slider>

			<Slider {...settings}>
				{shuffledImages3.map((image, index) => (
					<div key={`carousel3-${index}`} className="px-6">
						<img
							src={image}
							alt={`Image 3-${index}`}
							width={950}
							height={800}
							className="object-cover w-full max-[400px]:h-48 h-64 rounded-3xl"
							loading="lazy"
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Carousel;
