import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import { ScrollControls } from "@react-three/drei";
import Loader from "./Loader/Loader";
import { Suspense } from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function Threescene() {
  return (
    <>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={25} damping={0.3}>
            <Experience />
          </ScrollControls>
          <EffectComposer>
            <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.2}/>
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Threescene;
