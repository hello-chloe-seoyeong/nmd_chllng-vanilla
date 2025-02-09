import {API_KEY} from "./config.js";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      console.log(data)
      // weather.innerText = `${data.weather[0].icon}`;
      // const imgElement = document.createElement('img');
      // imgElement.src = ``;
      // weather.appendChild(imgElement);
      weather.innerHTML += `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
      city.innerText = `${data.name}`
    })
}

function onGeoError() {
  alert("I hided API KEY, so location and weather could be wrong in github pages...")
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");

  weather.innerHTML += `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" />
  `;
  city.innerText = "Seoul"
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)