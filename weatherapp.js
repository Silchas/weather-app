const apiKey =

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#submit');
  
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


async function getWeatherByLocation(city){
     
         const response = await fetch(url(city), {
             origin: apiKey });
         const responseData = await response.json();
     
           addWeatherToPage(responseData);
     }

     submit.addEventListener('submit',(e) =>{
        e.preventDefault();

        const city = search.value;

        if(city){
            getWeatherByLocation(city)
        }

     });
