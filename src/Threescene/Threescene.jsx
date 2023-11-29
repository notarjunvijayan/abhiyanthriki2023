import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import { ScrollControls } from "@react-three/drei";
function Threescene() {
  
  return (
    <>
      <Canvas>
        <ScrollControls pages={25} damping={0.3}>
          <Experience/>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default Threescene;
