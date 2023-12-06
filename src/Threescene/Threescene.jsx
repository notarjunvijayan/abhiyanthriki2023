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
          <ScrollControls pages={25} damping={0.2}>
            <Experience />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Threescene;
