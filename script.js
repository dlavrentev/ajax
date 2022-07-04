const apiKey = "6b99eeb170212fac17a179bd3c7bdfb9";
let search = '';
const cityForm = document.getElementById("city-form");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feels-like");
const windSpeed = document.getElementById("wind-speed");

const cityInput = document.getElementById("city-input");
const weatherIcon = document.getElementById("weather-icon");


cityForm.addEventListener('submit',(event)=>{
      event.preventDefault();
      search=cityInput.value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
    .then(response=> response.json())
    .then(data=>{
      cityName.innerHTML = data.name;
      temperature.innerHTML = data.main.temp;
      feelsLike.innerHTML=data.main.feels_like;
      windSpeed.innerHTML = data.wind.speed;
      let iconLink = data.weather[0].icon;

      weatherIcon.setAttribute('src',`https://openweathermap.org/img/wn/${iconLink}@2x.png`)    
    })
    .catch(err=>console.log(err))
})


//QUOTE API
// let page = Math.ceil(Math.random()*7268);
// let randomNumber = Math.ceil(Math.random()*10);
// fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
// .then(response=>response.json())
// .then(data=>{
//   console.log(data.data[randomNumber].quoteText)
//   console.log(data.data[randomNumber].quoteAuthor)

//   console.log(page , randomNumber)
// })




