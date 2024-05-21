import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { motion } from "framer-motion-3d";

export default function Weather(props) {
  const { position, weather, rotationY } = props;
  const glb = useLoader(GLTFLoader, "/models/weather.glb");
  const ref = useRef(null);
  const weatherModel = useMemo(() => {
    const cloneModel = glb.nodes[weather]
      ? glb.nodes[weather].clone()
      : glb.nodes.cloud.clone();

    return cloneModel;
  }, [weather]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta;
  }, []);

  return (
    <motion.mesh
      whileHover={{ scale: 1.5, transition: 0.5 }}
      position={position}
      rotation-y={rotationY}
      ref={ref}
    >
      <primitive object={weatherModel}></primitive>
    </motion.mesh>
  );
}
