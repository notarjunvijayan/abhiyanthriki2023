import { Html, useProgress } from "@react-three/drei";
import "./Loader.css";
export default function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html center>
      <div className="loader-container">
        <div className="text">
          <h1>ABHIYANTHRIKI</h1>
          <h2>2023</h2>
          <p>{parseInt(progress)}</p>
        </div>
      </div>
    </Html>
  );
}
