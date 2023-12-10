import { Drone } from './ModelComponents/StingerDrone';
import { Cloud } from './ModelComponents/Model';
import { useFrame } from '@react-three/fiber';
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
        new THREE.Vector3(9, 0, -330),
        new THREE.Vector3(8, 1, -340),
        new THREE.Vector3(8, 1, -350),
        new THREE.Vector3(8, 1, -370),
        new THREE.Vector3(6, 0, -390),
        new THREE.Vector3(5, -1, -400),
        new THREE.Vector3(5, -2, -420),
        new THREE.Vector3(5, -2, -440),
        new THREE.Vector3(2, -2, -470),
        new THREE.Vector3(0, -2, -490),
        new THREE.Vector3(-3, -2, -510),
        new THREE.Vector3(-6, -2, -525),
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

  const cameraGroup = useRef();
  const airplane = useRef();
  const scroll = useScroll();
  const camera = useRef();
  const drone = useRef();

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
      <Telescope scale={2} position={[6, -2, -330]} rotation={[0, 1, 0]} />

      <Astronaut position={[-5, 4, -340]} rotation={[0, 0, 0]} scale={0.05} />

      <Cloud
        position={[5, -6, -334]}
        scale={window.innerHeight > window.innerWidth ? 1 : 1.5}
      />

      <Drone position={[-5, 0, -480]} scale={2} rotation={[0.25, 2.2, 0]} />
      <Cloud position={[-5, -4, -482]} scale={1.5} />

      <Drumset position={[5.5, -1, -405]} scale={2} />
      <Cloud position={[5, -3, -408]} scale={1.5} />

      <Image
        url={'/Images/rset.jpg'}
        position={
          window.innerHeight > window.innerWidth ? [15, 10, -140] : [5, 0, -138]
        }
        args={window.innerHeight > window.innerWidth ? [25, 15] : [15, 10]}
      />
      <Image
        url={'/Images/Hubspire.jpg'}
        position={[23, -1, -250]}
        args={[5, 1]}
      />
      <Image
        url={'/Images/GLOBAL_logo.jpg'}
        position={[18, -1, -250]}
        args={[4, 4]}
      />
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

      <RoundedBox args={[12, 5, 0.5]} radius={0.15} position={[21, -1, -251]} />

      <group position={[-41, -5, -20]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={8}
          font={'/Fonts/monument-regular.otf'}
        >
          ABHIYANTHRIKI
        </Text>
      </group>
      <group position={[-6, -12, -20]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={3}
          font={'/Fonts/monument-regular.otf'}
        >
          2023
        </Text>
      </group>
      <group position={[-4.5, -25, -10]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          Scroll to Fly
        </Text>
      </group>
      <group position={[-8, 2, -70]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          15-16 Dec, 2023
        </Text>
      </group>
      <group position={[-13, 0, -70]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={0.6}
          font={'/Fonts/mono.ttf'}
        >
          Rajagiri School of Engineering and Technology
        </Text>
      </group>
      <group
        position={
          window.innerHeight > window.innerWidth ? [0, -5, -130] : [17, 0, -130]
        }
        rotation={[0, -0.25, 0]}
      >
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={window.innerHeight > window.innerWidth ? 1.1 : 0.8}
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
      <group position={[12, 0, -280]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={1}
          font={'/Fonts/mono.ttf'}
        >
          Get Ready For
        </Text>
      </group>
      <group position={[3, -5, -325]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/mono.ttf'}
        >
          Orion's Watch
        </Text>
      </group>
      <group position={[4, -6, -325]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.5}
          font={'/Fonts/mono.ttf'}
        >
          15/12/2023
        </Text>
      </group>
      <group position={[3, -2, -400]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/mono.ttf'}
        >
          Battle of Bands
        </Text>
      </group>
      <group position={[4, -3, -400]}>
        <Text
          color='white' // default
          anchorX='middle' // default
          anchorY='middle' // default
          fontSize={0.5}
          font={'/Fonts/mono.ttf'}
        >
          15/12/2023
        </Text>
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
      <group position={[0, 2.5, -200]}>
        <Text
          color='white' // default
          anchorX='left' // default
          anchorY='middle' // default
          fontSize={0.8}
          font={'/Fonts/monument-regular.otf'}
        >
          TITLE SPONSOR
        </Text>
      </group>
      <group position={[15, 2.5, -240]}>
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
          rotation={[0, 0, 0]}
          fov={window.innerWidth < window.innerHeight ? 45 : 30}
          makeDefault
          lookAt={Drone}
          far={125}
          near={window.innerWidth < window.innerHeight ? 20 : 5}
          ref={camera}
        />
        <group ref={airplane}>
          <Float floatIntensity={2} speed={2}>
            <Spaceship scale={0.004} rotation={[0, 3.14, 0]} />
          </Float>
        </group>
        <Environment resolution={256} files={'/Models/venice_sunset_2k.hdr'} />
        <ambientLight />
      </group>
    </>
  );
}
