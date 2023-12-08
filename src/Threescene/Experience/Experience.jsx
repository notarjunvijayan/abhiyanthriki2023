import { Drone } from "./StingerDrone";
import { Cloud } from "./Cloud";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Plane, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { PerspectiveCamera } from "@react-three/drei";
import { Line, Float, Environment, Text } from "@react-three/drei";
import Balloon from './Balloon'
import { Telescope } from "./Telescope";
import { Astronaut } from "./Astronaut";
import Drumset from './Drumset'

// Total No of Generated Points from the CatMullRomCurve. Change this for a smoother path
const LINE_NB_POINTS = 600;


//Images Display Setup
const Texture = ({ texture, position, args }) => {
  return (
    <mesh position={position}>
      <planeGeometry attach="geometry" args={args} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};
const Image = ({ url, position, args }) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
  return <Texture position={position} texture={texture} args={args} />;
};

export default function Experience() {
  
  const envColor = useRef();

  //Set of points that define the Drone path
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, -10, 60),
        new THREE.Vector3(0, -1, 10),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, -0.5, -10),
        new THREE.Vector3(1, -0.5, -20),
        new THREE.Vector3(2, 0, -30),
        new THREE.Vector3(3, 0, -40),
        new THREE.Vector3(3, 0, -50),
        new THREE.Vector3(1, 0, -60),
        new THREE.Vector3(1, 0, -70),
        new THREE.Vector3(5, 0.5, -80),
        new THREE.Vector3(7, 1, -90),
        new THREE.Vector3(10, 1, -100),
        new THREE.Vector3(15, 1, -130),
        new THREE.Vector3(15, -1, -150),
        new THREE.Vector3(15, -1, -160),
        new THREE.Vector3(10, -1, -180),
        new THREE.Vector3(10, -1, -190),
        new THREE.Vector3(12, -1, -200),
        new THREE.Vector3(12, -1, -220),
        new THREE.Vector3(12, -1, -240),
        new THREE.Vector3(12, -1, -250),
        new THREE.Vector3(9, -1, -260),
        new THREE.Vector3(9, -1, -270),
        new THREE.Vector3(10, -1, -290),
        new THREE.Vector3(12, -1, -300),
        new THREE.Vector3(11, -1, -310),
        new THREE.Vector3(10, -1, -320),
        new THREE.Vector3(9, 1 , -330),
        new THREE.Vector3(8, 2 , -340),
        new THREE.Vector3(8, 2 , -350),
        new THREE.Vector3(8, 1 , -370),
        new THREE.Vector3(6, 0 , -390),
        new THREE.Vector3(5, -1 , -400),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);


  //Setting Linepoints
  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);


  const cameraGroup = useRef();
  const airplane = useRef();
  const scroll = useScroll();
  const camera = useRef();


  useFrame((_state, delta) => {

    //Fov and Position Changes according to window aspect ratio
    //(SCENE RESPONSIVITY)
    if(window.innerWidth < window.innerHeight){
      camera.current.fov = 45;
      camera.current.position.z = 50
      camera.current.position.y = 5
    }
    else{
      camera.current.fov = 30
      camera.current.position.z = 13
      camera.current.position.y = 1
    }


    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    const pointAhead =
      linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

    const xDisplacement = (pointAhead.x - curPoint.x) * 80;

    
    //Functions to Set Rotation of the drone on Turn
    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) *
      Math.min(Math.abs(xDisplacement), Math.PI / 16);

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angleRotation
      )
    );
    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        cameraGroup.current.rotation.x,
        angleRotation,
        cameraGroup.current.rotation.z
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);
    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });
  return (
    <>
      <Cloud position={[30, 0, -50]} />
      <Cloud position={[-7, 0, -20]} />
      <Cloud position={[50, 0, -100]} />
      <Cloud position={[7, -5, -30]} />
      <Cloud position={[0, 0, -250]} scale={3}/>
      <Cloud position={[15, 0, -150]} scale={5} />
      <Cloud position={[5.5, -2.75, -330]} />
      <Cloud position={[15, -2.75, -350]} />

      <Telescope scale={2} position={[6,-2,-330]} rotation={[0,1,0]}/>
      <Astronaut position={[-5,4,-340]} rotation={[1,-1,1]} scale={0.01}/>

      <Drumset position={[5.5,-1,-405]} scale={2}/>
      <Cloud position={[5, -4, -408]} scale={3.5}/>

      <Float>
      <Balloon position={[15,0,-15]} scale={0.005}/> 
      </Float>
      <Float floatIntensity={1} speed={0.005} floatingRange={0.0001}>
      <Balloon position={[10,-20,-220]} scale={0.005}/> 
      </Float>
      <Image url={"/Images/rset.jpg"} position={[5, 0, -130]} args={[15, 10]} />
      <Image
        url={"/Images/Hubspire.jpg"}
        position={[24, -1, -250]}
        args={[5, 1]}
      />
      <Image
        url={"/Images/GLOBAL_logo.jpg"}
        position={[18, -1, -250]}
        args={[4, 4]}
      />
      <group position={[-25, -5, -20]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={5}
          font={"/Fonts/monument-regular.otf"}
        >
          ABHIYANTHRIKI
        </Text>
      </group>
      <group position={[-5, -10, -20]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={3}
          font={"/Fonts/monument-regular.otf"}
        >
          2023
        </Text>
      </group>
      <group position={[-2.5, -25, -10]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={1}
          font={"/Fonts/Neue.otf"}
        >
          Scroll to Fly
        </Text>
      </group>
      <group position={[-8, 2, -70]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={1}
          font={"/Fonts/Neue.otf"}
        >
          15-16 Dec, 2023
        </Text>
      </group>
      <group position={[-13, 0, -70]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={0.6}
          font={"/Fonts/Neue.otf"}
        >
          Rajagiri School of Engineering and Technology
        </Text>
      </group>
      <group position={[17, 0, -130]} rotation={[0, -0.25, 0]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={0.8}
          font={"/Fonts/Neue.otf"}
        >
          Abhiyanthriki, RSET's biennial technical festival, epitomizes academic
          {"\n"}
          excellence and innovation. Spanning two meticulously organized days,{" "}
          {"\n"}
          it offers a spectrum of opportunities, including technical contests,
          {"\n"}
          workshops, and creative stalls.Emphasizing sustainability, the event
          {"\n"}
          incorporates inventive reuse of plastic bottles and circuit boards in
          {"\n"}
          its decor.{"\n"}
          {"\n"}Abhiyanthriki is more than an event; it's a distinguished{"\n"}
          platform embodying scholastic and technical achievement.
        </Text>
      </group>
      <group position={[0, 0, -230]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={1}
          font={"/Fonts/Neue.otf"}
        >
          Excited ?
        </Text>
      </group>
      <group position={[12, 0, -280]}>
        <Text
          color="black" // default
          anchorX="middle" // default
          anchorY="middle" // default
          fontSize={1}
          font={"/Fonts/Neue.otf"}
        >
          Get Ready For
        </Text>
      </group>
      <group position={[3, -5, -325]}>
        <Text
          color="black" // default
          anchorX="middle" // default
          anchorY="middle" // default
          fontSize={0.8}
          font={"/Fonts/Neue.otf"}
        >
          Galactic Gaze
        </Text>
      </group>
      <group position={[4, -6, -325]}>
        <Text
          color="black" // default
          anchorX="middle" // default
          anchorY="middle" // default
          fontSize={0.5}
          font={"/Fonts/Neue.otf"}
        >
          15/12/2023
        </Text>
      </group>
      <group position={[3, -2, -400]}>
        <Text
          color="black" // default
          anchorX="middle" // default
          anchorY="middle" // default
          fontSize={0.8}
          font={"/Fonts/Neue.otf"}
        >
          Battle of Bands
        </Text>
      </group>
      <group position={[4, -3, -400]}>
        <Text
          color="black" // default
          anchorX="middle" // default
          anchorY="middle" // default
          fontSize={0.5}
          font={"/Fonts/Neue.otf"}
        >
          xx/12/2023
        </Text>
      </group>
      <group position={[15, 3, -250]}>
        <Text
          color="black" // default
          anchorX="left" // default
          anchorY="middle" // default
          fontSize={0.8}
          font={"/Fonts/monument-regular.otf"}
        >
          PLANTINUM SPONSORS
        </Text>
      </group>
      <group ref={cameraGroup}>
        <PerspectiveCamera
          rotation={[0, 0, 0]}
          fov={window.innerWidth<window.innerHeight?45:30}
          makeDefault
          lookAt={Drone}
          far={200}
          ref={camera}
        />
        <group ref={airplane}>
          <Float floatIntensity={2} speed={2}>
            <Drone scale={1.5} />
          </Float>
        </group>
        <Environment resolution={256} files={"/Models/venice_sunset_2k.hdr"} />
        <Sphere
          scale={[100, 100, 100]}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 2}
        >
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient
              ref={envColor}
              colorA={"#f4bf07"}
              colorB={"#ec662d"}
              axes={"y"}
              start={0}
              end={-0.25}
            />
          </LayerMaterial>
        </Sphere>
      </group>
      <OrbitControls enableZoom={false} />
    </>
  );
}
