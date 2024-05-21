import { useBounds } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function FocusWeather({ children }) {
  const bounds = useBounds();

  const initialBounds = useRef(null);

  useEffect(() => {
    // initialBounds.current = bounds.get();
    console.log(bounds);
  }, []);

  const handleClick = (e) => {
    console.log(e.object.name);
    e.stopPropagation();
    bounds.refresh(e.object).fit();
  };

  const handlePoninterMissed = (e) => {
    e.stopPropagation();
    if (e.button === 0) {
      bounds.refresh().fit();
      // if (initialBounds.current) {
      //   bounds.refresh(initialBounds.current).fit();
      // } else {
      //   bounds.refresh().fit();
      // }
    }
  };
  return (
    <group onClick={handleClick} onPointerMissed={handlePoninterMissed}>
      {children}
    </group>
  );
}
