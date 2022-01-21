const weatherBox = document.querySelector(".header .weather");

let weatherIcon = {
  "01": "far fa-sun",
  "02": "far fa-cloud-sun",
  "03": "far fa-cloud",
  "04": "far fa-cloud-meatball",
  "09": "far fa-cloud-sun-rain",
  10: "far fa-cloud-showers-heavy",
  11: "far fa-poo-storm",
  13: "far fa-snowflake",
  50: "far fa-smog",
};

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=e4de3cfc2c15755cff069e3c393e4310`
)
  .then((response) => response.json())
  .then((data) => {
    weatherBox.innerHTML = `<img class ='loading' src= './image/Rolling-1s-200px.gif' />`;

    let icon = data.weather[0].icon.substr(0, 2);
    let temp = String(Math.floor(data.main.temp)).substr(0, 2) + "º";
    const city = data.name;
    setTimeout(() => {
      weatherBox.innerHTML = `
    <div class = 'show-weather'>
    <span class = 'show-icon'><i class= '${weatherIcon[icon]}'></i></span>
    <span class= 'show-temp'>${temp}</span>
    </div>

    <span class= 'show-city'>${city}</span>

    `;
    }, 2000);
  })
  .catch((error) => {
    console.error(error);
  });
