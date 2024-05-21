import { Suspense, lazy } from "react";
import { Scene } from "../components/Scene";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <motion.mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshNormalMaterial color={"red"} />
    </motion.mesh>
  );
}

export function Home() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 5] }}>
        {/* <color attach={"background"} args={["rgba(67, 127, 240, 1)"]}></color> */}
        <Suspense fallback={<Sphere />}>
          {/* <Sphere /> */}
          <Scene />
        </Suspense>
        <OrbitControls
          enableDamping
          minDistance={3}
          maxDistance={15}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
}
