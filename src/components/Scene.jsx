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
      <Earth />
      {cityContent?.map((city, i) => {
        const angle = (i / (cityContent.length - 1)) * Math.PI;
        const radius = 2;
        const x = Math.cos(angle).toFixed(2) * radius;
        const y = Math.sin(angle).toFixed(2) * radius;
        console.log(city);
        return (
          <Weather
            key={i}
            position={[x, y, 0]}
            rotationY={i + 1}
            cityName={city.city}
            weather={city.weather.weather[0].main.toLowerCase()}
          />
        );
      })}
    </>
  );
}
