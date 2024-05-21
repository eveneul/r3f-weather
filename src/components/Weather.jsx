import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { motion } from "framer-motion-3d";
import { Html } from "@react-three/drei";
import CityName from "./CityName";

export default function Weather(props) {
  const { position, weather, rotationY, cityName } = props;
  const glb = useLoader(GLTFLoader, "/models/weather.glb");
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);
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
    <group position={position} rotation-y={rotationY} name="weather">
      <motion.mesh
        whileHover={{ scale: 1.5, transition: 0.5 }}
        ref={ref}
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
      >
        <primitive object={weatherModel}></primitive>
      </motion.mesh>
      {isHover && <CityName name={cityName} />}

      {/* <Html>{cityName}</Html> */}
    </group>
  );
}
