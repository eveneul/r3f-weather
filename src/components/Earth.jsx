import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function Earth(props) {
  const glb = useLoader(GLTFLoader, "/models/earth.glb");

  return (
    <mesh {...props}>
      <primitive object={glb.scene}></primitive>
    </mesh>
  );
}
