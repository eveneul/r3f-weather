import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function CityName(props) {
  const { name } = props;

  return (
    <>
      <motion.group initial={{ y: 0.3 }} animate={{ y: 0.4 }}>
        <Html center position-y={0.4} position-x={-0.15}>
          <div className="cityName">{name}</div>
        </Html>
      </motion.group>
    </>
  );
}
