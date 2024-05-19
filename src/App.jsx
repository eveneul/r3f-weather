import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLight, DirectionalLightHelper } from "three";

const Light = () => {
  const ref = useRef(null);
  useHelper(ref, DirectionalLightHelper, 1, "red");

  return (
    <directionalLight
      ref={ref}
      position={[1, 1, -1]}
      intensity={3}
    ></directionalLight>
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
    <Canvas camera={{ position: [0, 1, 2] }}>
      <color attach={"background"} args={["yellow"]}></color>
      <Light />
      <Box rotation-y={1} />
      <Box position={[0, 0, -1]} rotation-y={1} />
    </Canvas>
  );
}

export default App;
