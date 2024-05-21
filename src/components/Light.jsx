import { Environment } from "@react-three/drei";

const Light = () => {
  return (
    <>
      <Environment preset="forest" />
      <directionalLight position={[1, 3, -1]} intensity={3} />
      <ambientLight intensity={1} />
    </>
  );
};

export { Light };
