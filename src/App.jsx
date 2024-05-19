import { Canvas, useLoader } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = (props) => {
  const glb = useLoader(GLTFLoader, "/models/earth.glb");

  return (
    <mesh {...props}>
      <primitive object={glb.scene}></primitive>
    </mesh>
  );
};

const Light = () => {
  return (
    <directionalLight position={[1, 3, -1]} intensity={3}></directionalLight>
  );
};

const Box = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <color attach={"background"} args={["yellow"]}></color>
      <Light />

      <Model position={[0, -2, 0]} />
    </Canvas>
  );
}

export default App;
