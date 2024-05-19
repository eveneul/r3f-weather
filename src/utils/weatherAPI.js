export const getCurrentWeather = (lat, lon, key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error, "error..."));
};

export const getCityWeather = (city, key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        return {
          city: city,
          weather: data,
        };
      }
    })
    .catch((error) => {
      console.log(error, "error...");
      return null;
    });
};
