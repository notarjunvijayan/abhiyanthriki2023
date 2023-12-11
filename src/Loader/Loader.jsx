import {useEffect, useRef} from 'react';
import lottie from 'lottie-web';
import animationData from './logo_animation.json'; 
import './Loader.css'

  export default function Loader() {
    const lottieContainer = useRef(null);
  
    useEffect(() => {
        const instance = lottie.loadAnimation({
          container: lottieContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData,
        });
        instance.setSpeed(5);
          return () => instance.destroy();
    }, []);
  
    return (
      <div className="flex justify-center items-center w-full h-full loader">
        <div className="md:h-[75vh] md:w-full w-[70vh]" ref={lottieContainer} />
      </div>
    );
  }