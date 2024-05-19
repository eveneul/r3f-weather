import { Canvas } from "@react-three/fiber";
import { Light } from "./Light";
import { Earth } from "./Earth";
import Weather from "./Weather";
import { useEffect, useState } from "react";
import { getCityWeather, getCurrentWeather } from "../utils/weatherAPI";
import { cities } from "../utils/cities";

const key = import.meta.env.VITE_WEATHER_API_KEY;
export function Scene() {
  const [cityContent, setCityContent] = useState();

  const getCitiesWeather = () => {
    const promies = cities.map((city) => getCityWeather(city, key));
    Promise.all(promies)
      .then((data) => {
        setCityContent(data);
      })
      .catch((error) => console.log("error..", error));
  };

  useEffect(() => {
    getCitiesWeather();
    // const fetchData = async () => {
    //   const data = await getCityWeather("Seoul", key);
    //   console.log(data);
    // };

    // fetchData();
  }, []);

  useEffect(() => {
    console.log(cityContent, "cityContent"), [cityContent];
  });

  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <color attach={"background"} args={["rgba(67, 127, 240, 1)"]}></color>
      <Light />
      <Earth position={[0, -2, 0]} />
      <Weather position={[-2, 0, 0]} weather="clear" />
      <Weather position={[-1, 0, 0]} weather="cloud" />
      <Weather position={[0, 0, 0]} weather="clouds" />
      <Weather position={[1, 0, 0]} weather="mist" />
      <Weather position={[2, 0, 0]} weather="rain" />
      <Weather position={[0, 1, 0]} weather="rain2" />
      <Weather position={[0, 2, 0]} weather="snow" />
    </Canvas>
  );
}
