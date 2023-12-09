import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import { ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import  Loader  from "./Loader/Loader"
import { useProgress } from "@react-three/drei";

function Threescene() {

  const [loading, setLoading] = useState(false)
  const [ready,setReady] = useState(false)

  const progress = useProgress()
  console.log(progress.progress)

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
      <Canvas linear={true}>
          <ScrollControls pages={25} damping={0.2}>
            <Experience />
          </ScrollControls>
      </Canvas>
    </>
  );
}

export default Threescene;