import { Suspense, lazy } from "react";
import { Scene } from "../components/Scene";
import { Canvas } from "@react-three/fiber";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export function Home() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 5] }}>
        <color attach={"background"} args={["rgba(67, 127, 240, 1)"]}></color>
        <Suspense fallback={<Sphere />}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}
