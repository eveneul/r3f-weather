import { Canvas } from "@react-three/fiber";
import { Light } from "./Light";
import { Earth } from "./Earth";
import Weather from "./Weather";

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <color attach={"background"} args={["rgba(67, 127, 240, 1)"]}></color>
      <Light />
      <Earth position={[0, -2, 0]} />
      <Weather position={[-2, 0, 0]} weather="clear" />
      <Weather position={[-1, 0, 0]} weather="cloud" />
      <Weather position={[0, 0, 0]} weather="clouds" />
      <Weather position={[1, 0, 0]} weather="mist" />
      <Weather position={[2, 0, 0]} weather="rain" />
      <Weather position={[0, 1, 0]} weather="rain2" />
      <Weather position={[0, 2, 0]} weather="snow" />
    </Canvas>
  );
}
