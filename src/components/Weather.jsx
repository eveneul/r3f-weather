import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Weather(props) {
  const { position, weather } = props;
  const glb = useLoader(GLTFLoader, "/models/weather.glb");

  // let weatherModel;

  // if (glb.nodes[weather]) {
  //   weatherModel = glb.nodes[weather].clone();
  // } else {
  //   weatherModel = glb.nodes.cloud.clone();
  // }

  const weatherModel = useMemo(() => {
    // if (glb.nodes[weather]) {
    //   // API에서 제공하는 날씨 데이터와 날씨 모델링이 같을 때
    //   const cloneData = glb.nodes[weather].clone();
    //   return cloneData;
    // } else {
    //   // API에서 제공하는 날씨 데이터와 날씨 모델링이 다를 때 (없을 때)
    //   const cloneData = glb.nodes.cloud.clone();
    //   return cloneData;
    // }

    const cloneModel = glb.nodes[weather]
      ? glb.nodes[weather].clone()
      : glb.nodes.cloud.clone();

    return cloneModel;
  }, [weather]);

  return (
    <mesh position={position}>
      <primitive object={weatherModel}></primitive>
    </mesh>
  );
}
