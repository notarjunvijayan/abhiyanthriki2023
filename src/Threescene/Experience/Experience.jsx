import { Drone } from './ModelComponents/StingerDrone';
import { Cloud } from './ModelComponents/Model';
import { useFrame } from '@react-three/fiber';
import { useState,useEffect } from 'react';
import { RoundedBox, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Line, Float, Environment, Text } from '@react-three/drei';
import { Telescope } from './ModelComponents/Telescope';
import { Astronaut } from './ModelComponents/Astronaut';
import Drumset from './ModelComponents/Drumset';
import { Spaceship } from './ModelComponents/Spaceship';


// Total No of Generated Points from the CatMullRomCurve. Change this for a smoother path
const LINE_NB_POINTS = 600;
const CURVE_DISTANCE = 250;

//Images Display Setup
const Texture = ({ texture, position, args }) => {
  return (
    <mesh position={position}>
      <planeGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};
const Image = ({ url, position, args }) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
  return (
    <Texture
      toneMapped={true}
      position={position}
      texture={texture}
      args={args}
    />
  );
};

export default function Experience() {
  //Set of points that define the Drone path
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      new THREE.Vector3(50, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-50, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(50, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      ],
      false,
      'catmullrom',
      0.5
    );
  }, []);

  const cameraCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -CURVE_DISTANCE),
        new THREE.Vector3(45, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(-45, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(45, 0, -4 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      ],
      false,
      'catmullrom',
      0.5
    );
  }, []);
  
  //Setting Linepoints
  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const cameraPoints = useMemo(() => {
    return cameraCurve.getPoints(LINE_NB_POINTS);
  }, [cameraCurve]);

  const cameraGroup = useRef();
  const droneGroup = useRef();
  const airplane = useRef();
  const scroll = useScroll();
  const camera = useRef();

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useFrame((_state, delta) => {
    //Fov and Position Changes according to window aspect ratio
    //(SCENE RESPONSIVITY)
    if (window.innerWidth < window.innerHeight) {
      camera.current.fov = 45;
      camera.current.position.z = 60;
      camera.current.position.y = 5;
    } else {
      camera.current.fov = 30;
      camera.current.position.z = 13;
      camera.current.position.y = 1;
    }
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );

    const camPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );

    const curPoint = linePoints[curPointIndex];
    const camPoint = cameraPoints[camPointIndex];

    const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)]
    const xDisplacement = (pointAhead.x - curPoint.x) * 80;

    const campointAhead = linePoints[Math.min(camPointIndex + 1, cameraPoints.length - 1)]
    const camxDisplacement = (campointAhead.x - camPoint.x) * 80;

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
        droneGroup.current.rotation.x,
        angleRotation,
        droneGroup.current.rotation.z
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    droneGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);
    droneGroup.current.position.lerp(curPoint, delta * 24);

    cameraGroup.current.position.lerp(camPoint, delta * 2)
  });
  return (
    <>
      <Drone position={[-5, 0, -480]} scale={2} rotation={[0.25, 2.2, 0]} />
      
      <Image
        url={'/Images/a3k217.jpg'}
        position={[10, 8, -600]}
        args={[16, 9]}
      />
      <Image
        url={'/Images/a3kvintage3.jpg'}
        position={[10, -3, -600]}
        args={[16, 10]}
      />

      <group position={[-15, 4, -20]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={3}
          font={'/Fonts/monument-regular.otf'}
        >
          ABHIYANTHRIKI
        </Text>
      </group>
      <group position={[5, 1, -20]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={2}
          font={'/Fonts/monument-regular.otf'}
        >
          2023
        </Text>
      </group>
      <group position={[6, -2, 0]}>
        <Text
          color='white' // default
          anchorX='right' // default
          anchorY='middle' // default
          fontSize={0.15}
          font={'/Fonts/mono.ttf'}
        >
          Scroll to Fly
        </Text>
      </group>
      <group position={[-6, -1.5, 0]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={0.15}
          font={'/Fonts/mono.ttf'}
          fontWeight='bold'
        >
          15-16 December, 2023
        </Text>
      </group>
      <group position={[-15,0,-100]}>
      <group position={[-10,7,0]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1.75}
          font={'/Fonts/monument-regular.otf'}
        >
          TITLE SPONSOR
        </Text>
      </group>
      <group>
        <Image
          position={[-1,0,0.5]}
          url={'/Images/techmindz-white.png'}
          args={[16, 10]}
        />
        <RoundedBox args={[20, 10, 0.5]} radius={0.15} position={[-1,0,0]}>
          <meshBasicMaterial color={'black'}/>
        </RoundedBox>
      </group>
      </group>
      <group position={[10,0,-150]}>
      <group position={[-6,4,0]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/monument-regular.otf'}
        >
          PLATINUM SPONSORS
        </Text>
      </group>
      <Image
        position={[-2.5,0,0.5]}
        url={'/Images/Hubspire.jpg'}
        args={[5, 1]}
      />
      <Image
        position={[3,0,0.5]}
        url={'/Images/GLOBAL_logo.jpg'}
        args={[4, 4]}
      />
      <RoundedBox args={[12, 5, 0.5]} radius={0.15} />
      </group>

      <group position={[-6, -2, 0]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={0.15}
          font={'/Fonts/mono.ttf'}
        >
          Rajagiri School of Engineering and Technology
        </Text>
      </group>
      <group position={[0,0,-238]}>
      <group position={[-30,8,0]}>
        <Text
        color='white' // default
        anchorX='left' // default
        anchorY='middle' // default
        fontSize={1.7}
        font={'/Fonts/monument-regular.otf'}
        >
          ABOUT{"\n"}ABHIYANTHRIKI
        </Text>
      </group>
      <Image
        url={'/Images/rset.jpg'}
        position={[-17.5, -3, 0]
        }
        args={[25, 15]}
      />
      <group position={[2,-2,0]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/mono.ttf'}
          maxWidth={22}
        >
          Abhiyanthriki, RSET's biennial technical festival, epitomizes academic
          {'\n'}
          excellence and innovation. Spanning two meticulously organized days,{' '}
          {'\n'}
          it offers a spectrum of opportunities, including technical contests,
          {'\n'}
          workshops, and creative stalls.Emphasizing sustainability, the event
          {'\n'}
          incorporates inventive reuse of plastic bottles and circuit boards in
          {'\n'}
          its decor.{'\n'}
          {'\n'}Abhiyanthriki is more than an event; it's a distinguished{'\n'}
          platform embodying scholastic and technical achievement.
        </Text>
      </group>
      </group>
      {/* <group position={[0, 0, -230]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          Excited ?
        </Text>
      </group> */}
       <group position={[-3, 4.5, -310]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={2}
          font={'/Fonts/mono.ttf'}
        >
          Get Ready For
        </Text>
      </group>
      <group position={[-5,4,-400]}>
      <group position={[-5, -3, 0]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={2}
          font={'/Fonts/mono.ttf'}
        >
          Orion's Watch
        </Text>
      </group>
      <group position={[-5, -5 , 0]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          14/12/2023
        </Text>
      </group>
      <group position={[-5, -8 , 0]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          One Liner for Orion's Watch{'\n'}Join Today
        </Text>
      </group>
      <Telescope scale={6} position={[12, -2, 0]} rotation={[0, 1, 0]} />
      <Float floatIntensity={5} floatingRange={5}>
        <Astronaut position={[-5, 4, -7]} rotation={[-0.2, -0.5, -0.5]} scale={0.04} />
      </Float>
      <group onClick={()=>{window.open("/events/orions-watch")}} position={[-1.5,-13,0]} 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
        <RoundedBox args={[7,2.5]} radius={0.35}/>
        <group position={[-2,0.2,2]}>
        <Text
          color='black' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/mono.ttf'}
        >
          View Event
        </Text>
        </group>
      </group>
      </group>
      <group position={[10,0,-500]}>
      <group position={[0, 0, 0]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={2}
          font={'/Fonts/mono.ttf'}
        >
          Rythmic Resonance
        </Text>
      </group>
      <group position={[0, -2, 0]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          15/12/2023
        </Text>
      </group>
      <Drumset position={[9, 3, 0]} scale={6} />
      <group position={[0, -6 , 0]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          One Liner for Rythmic Resonance{'\n'}Join Today
        </Text>
      </group>
      <group onClick={()=>{window.open("/events/rhythmic-resonance")}} position={[3.5,-11,0]} 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
        <RoundedBox args={[7,2.5]} radius={0.35}/>
        <group position={[-2,0.2,2]}>
        <Text
          color='black' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/mono.ttf'}
        >
          View Event
        </Text>
        </group>
      </group>
      </group>
      <group position={[-5.5, -3, -470]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/mono.ttf'}
        >
          Drone Show
        </Text>
      </group>
      <group position={[-5, -4, -470]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.5}
          font={'/Fonts/mono.ttf'}
        >
          16/12/2023
        </Text>
      </group>
      <group position={[-35, 3, -600]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={3}
          font={'/Fonts/monument-regular.otf'}
        >
          BE A PART OF {'\n'}ABHIYANTHRIKI
        </Text>
      </group>
      <group position={[-40, -3, -600]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1.5}
          font={'/Fonts/mono.ttf'}
        >
          Register for events from the events section
        </Text>
      </group>
      <group position={[-15, -20, -600]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          Made by the Abhiyanthriki 2023 Website team
        </Text>
      </group>
      <group ref={cameraGroup}>
      <PerspectiveCamera
          fov={90}
          makeDefault
          lookAt={Spaceship}
          far={100}
          ref={camera}
        />
      </group>
      <group ref={droneGroup}>
        <group ref={airplane}>
          <Float floatIntensity={2} speed={2}>
            <Spaceship scale={0.008} rotation={[0, 3.14, 0]} />
          </Float>
        </group>
        <Environment resolution={256} files={'/Models/venice_sunset_2k.hdr'} />
        <ambientLight />
      </group>
    </>
  );
}
