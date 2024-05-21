import { Suspense, lazy } from "react";
import { Scene } from "../components/Scene";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";

export function Home() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        {/* <OrbitControls
          makeDefault
          enablePan={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          maxDistance={15}
          minDistance={2}
        /> */}
      </Canvas>
    </>
  );
}
