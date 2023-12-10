import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div className="w-[95%] mx-auto">
      {images.map((image, index) => (
        <div key={index} className={`relative w-full overflow-hidden ${index === currentIndex ? 'block' : 'hidden'}`}>
          <img
            src={image}
            className="w-full object-cover"
            alt={`slide-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
