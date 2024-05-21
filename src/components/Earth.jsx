import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function Earth() {
  const glb = useLoader(GLTFLoader, "/models/earth.glb");

  const [isHovered, setIsHovered] = useState(false);

  const earthRef = useRef(null);
  useFrame((state, delta) => {
    earthRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh
      position={[0, 0, 0]}
      ref={earthRef}
      scale={1.3}
      rotation-x={-Math.PI / 2}
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
    >
      <primitive object={glb.scene}></primitive>
    </mesh>
  );
}
