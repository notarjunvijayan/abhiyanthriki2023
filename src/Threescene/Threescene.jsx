import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import { ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import  Loader  from "./Loader/Loader"
import { useProgress } from "@react-three/drei";
import * as THREE from 'three'
import Navbar from "../Navbar/Navbar";
import '../Home/Home.css'
import { EffectComposer } from "@react-three/postprocessing";
import { Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import { Noise } from "lamina";

function Threescene() {

  const [loading, setLoading] = useState(false)
  const [ready,setReady] = useState(false)

  const progress = useProgress()

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setReady(true)
    },3000)
    if(setReady && progress.progress == 100){
      setLoading(false)
    }
  },[ready,loading])

  return (
    <>
      {loading?(<Loader/>):(<div className="navbar-threescene">
        <Navbar/>
      </div>)}
      <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
    linear>
          <ScrollControls pages={window.innerHeight<window.innerwidth?10:25} damping={window.innerHeight<window.innerWidth?0.5:0.2}>
            <Experience />
          </ScrollControls>
          <Noise></Noise>
      </Canvas>
    </>
  );
}

export default Threescene;