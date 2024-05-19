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
  }, []);

  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <color attach={"background"} args={["rgba(67, 127, 240, 1)"]}></color>
      <Light />
      <Earth position={[0, -2, 0]} />
      {/* {cityContent && (
        <>
          <Weather
            position={[-2, 0, 0]}
            weather={cityContent[0].weather.weather[0].main.toLowerCase()}
          />
          <Weather
            position={[-1, 0, 0]}
            weather={cityContent[1].weather.weather[0].main.toLowerCase()}
          />
          <Weather
            position={[0, 0, 0]}
            weather={cityContent[2].weather.weather[0].main.toLowerCase()}
          />
          <Weather
            position={[1, 0, 0]}
            weather={cityContent[3].weather.weather[0].main.toLowerCase()}
          />
          <Weather
            position={[2, 0, 0]}
            weather={cityContent[4].weather.weather[0].main.toLowerCase()}
          />
        </>
      )} */}
      {cityContent?.map((city, i) => (
        <Weather
          key={i}
          position={[-2 + i, 0, 0]}
          weather={city.weather.weather[0].main.toLowerCase()}
        />
      ))}
    </Canvas>
  );
}
