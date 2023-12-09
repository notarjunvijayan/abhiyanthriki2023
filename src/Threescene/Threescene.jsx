import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import { ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import  Loader  from "./Loader/Loader"
import { useProgress } from "@react-three/drei";
import { EffectComposer, Vignette,BrightnessContrast, Noise, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
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
      {loading?(<Loader/>):(<></>)}
      <Canvas>
          <ScrollControls pages={25} damping={0.2}>
            <Experience />
          </ScrollControls>
          <EffectComposer>
            <Vignette eskil={false} offset={0.3} darkness={0.55}/>
            <Noise opacity={0.02}/>
            <BrightnessContrast
              brightness={0} // brightness. min: -1, max: 1
              contrast={0.05} // contrast: min -1, max: 1
            />
            <HueSaturation
              blendFunction={BlendFunction.NORMAL} // blend mode
              hue={-0.05} // hue in radians
              saturation={0.1} // saturation in radians
            />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default Threescene;