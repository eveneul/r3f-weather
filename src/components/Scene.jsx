import { Canvas } from "@react-three/fiber";
import { Light } from "./Light";
import { Earth } from "./Earth";
import Weather from "./Weather";
import { Suspense, useEffect, useState } from "react";
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
    <>
      <Light />
      <Earth position={[0, -2, 0]} />
      {cityContent?.map((city, i) => (
        <Weather
          key={i}
          position={[-2 + i, 0, 0]}
          weather={city.weather.weather[0].main.toLowerCase()}
        />
      ))}
    </>
  );
}
