import { Drone } from "./StingerDrone";
import { Cloud } from "./Cloud";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { PerspectiveCamera } from "@react-three/drei";
import { Line, Float, Environment, Text } from "@react-three/drei";

// Total No of Generated Points from the CatMullRomCurve. Change this for a smoother path
const LINE_NB_POINTS = 256;


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
    if(window.innerWidth > window.innerHeight){
      camera.current.fov = 30
      camera.current.position.z = 13
    }
    else{
      camera.current.fov = 60;
      camera.current.position.z = 50
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
      <Cloud position={[7, -5, -30]} />
      <Cloud position={[15, 0, -150]} scale={5} />
      <Cloud position={[20, 0, -200]} scale={2} />

      <Line points={linePoints} />
      <Image url={"/Images/rset.jpg"} position={[0, 0, -130]} args={[15, 10]} />
      <Image
        url={"/Images/Hubspire.jpg"}
        position={[25, 0, -250]}
        args={[5, 1]}
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
      <group position={[20, 0, -130]} rotation={[0, -0.25, 0]}>
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
      <group position={[3, -2, -320]}>
        <Text
          color="black" // default
          anchorX="middle" // default
          anchorY="middle" // default
          fontSize={0.8}
          font={"/Fonts/Neue.otf"}
        >
          Drone Wars
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
          position={[0, 1, 13]}
          rotation={[0, 0, 0]}
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
              colorA={"#87ceeb"}
              colorB={"#ffffff"}
              axes={"y"}
              start={0}
              end={-0.2}
            />
          </LayerMaterial>
        </Sphere>
      </group>
      <OrbitControls enableZoom={false} />
    </>
  );
}
