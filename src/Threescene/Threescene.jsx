import { Canvas } from '@react-three/fiber';
import Experience from './Experience/Experience';
import { ScrollControls } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader.jsx';
import { useProgress } from '@react-three/drei';
import * as THREE from 'three';
import Navbar from '../Navbar/Navbar';
import '../Home/Home.css';
import { Noise } from 'lamina';
import Landing from '../Landing/Landing.jsx';

function Threescene() {
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const progress = useProgress();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setReady(true);
    }, 3000);
    if (setReady && progress.progress == 100) {
      setLoading(false);
    }
  }, [ready, loading]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='navbar-threescene'>
          <Navbar />
        </div>
      )}
      <div className='w-screen h-screen md:block hidden'>
        <Canvas
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
        >
          <ScrollControls
            pages={10}
            damping={0.5}
          >
            <Experience />
          </ScrollControls>
          <Noise></Noise>
        </Canvas>
      </div>
      <div className='md:hidden block'>
        {' '}
        {loading ? (
          <Loader />
        ) : (
          <div className='select-none md:hidden block  '>
            <Landing />
          </div>
        )}
      </div>
    </div>
  );
}

export default Threescene;
