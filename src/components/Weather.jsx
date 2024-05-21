import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Weather(props) {
  const { position, weather } = props;
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
    <mesh position={position} ref={ref}>
      <primitive object={weatherModel}></primitive>
    </mesh>
  );
}
