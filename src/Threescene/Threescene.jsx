import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import { ScrollControls } from "@react-three/drei";


function Threescene() {
  return (
    <>
      <Canvas linear={true}>

          <ScrollControls pages={25} damping={0.2}>
            <Experience />
          </ScrollControls>

      </Canvas>
    </>
  );
}

export default Threescene;
