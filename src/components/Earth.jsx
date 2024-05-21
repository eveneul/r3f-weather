import { Html } from "@react-three/drei";
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
    <group
      position={[0, 0, 0]}
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
    >
      <mesh ref={earthRef} scale={1.3} rotation-x={-Math.PI / 2}>
        <primitive object={glb.scene}></primitive>
      </mesh>
      {isHovered && (
        <Html center>
          <div className="ico-rotation">
            <img src="/images/icon/rotation.png" alt="icon" />
          </div>
        </Html>
      )}
    </group>
  );
}
