import { Canvas } from "@react-three/fiber";
import { Light } from "./Light";
import { Earth } from "./Earth";

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <color attach={"background"} args={["rgba(67, 127, 240, 1)"]}></color>
      <Light />
      <Earth position={[0, -2, 0]} />
    </Canvas>
  );
}
