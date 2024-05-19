const Light = () => {
  return (
    <>
      <directionalLight position={[1, 3, -1]} intensity={3} />
      <ambientLight intensity={1} />
    </>
  );
};

export { Light };
