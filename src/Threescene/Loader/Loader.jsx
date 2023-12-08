import { Html, useProgress } from "@react-three/drei";
import "./Loader.css";
export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container">
        <div className="text">
          <h1 className="select-none">ABHIYANTHRIKI</h1>
          <h2 className="select-none">2023</h2>
          <p>{parseInt(progress)}</p>
        </div>
      </div>
    </Html>
  );
}
