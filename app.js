//Form
var button= document.querySelector('.icon'); 
var input= document.querySelector('#city-input'); 
//City & weather
var city= document.querySelector('#city'); 
var weather= document.querySelector('#weather');
//Temperature
var currentTemp= document.querySelector('#current');
var minTemp= document.querySelector('#min');
var maxTemp= document.querySelector('#max');
//Info
var wind= document.querySelector('#wind');
var humidity= document.querySelector('#humidity');
var pressure= document.querySelector('#pressure');
var icon= document.querySelector('#weather-icon');
//date
var date= document.querySelector('#date');


//Open weather API key: 
const apiKey= '8196e3a1de904c2b87664a3bacdf720b';


//Button Event listener 'click' 
button.addEventListener('click', function(){

    window.city.innerHTML= 'LOADING..';

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)

    .then(function(response){ return response.json()})
    .then(function(data){
    console.log(data)
    //Variables
    const city = data.name; 
    const weather= data.weather[0].description;
    const temp= Math.floor(data.main.temp);
    const minTemp= Math.floor(data.main.temp_min);
    const maxTemp= Math.floor(data.main.temp_max);
    // const wind= ;
    const wind=data.wind.speed; 
    // const pressure= ;
    const pressure=data.main.pressure; 
    // const humidity= ; 
    const humidity=data.main.humidity;
    const icon= data.weather[0].icon;
    // const iconSrc= URL for the icon;
    const iconSrc=`http://openweathermap.org/img/wn/${icon}@2x.png`
    // const date= ;
    let now = new Date();
  let date = document.querySelector('#date');
  date.innerText = dateBuilder(now);


    //place the value
    window.city.innerHTML= city;
    window.weather.innerHTML= weather;
    

    window.currentTemp.innerHTML= `${temp}<sup>°C</sup>`; 
    window.minTemp.innerHTML= `${minTemp}<sup>°</sup>`
    window.maxTemp.innerHTML= `${maxTemp}<sup>°</sup>`

    window.wind.innerHTML=`wind | ____________________ ${wind}m/s`;

    window.humidity.innerHTML=`humidity | _________________${humidity}%` ;
    
    window.pressure.innerHTML=`pressure | _________________${pressure}hPa`;
    
    window.icon.src= iconSrc;  

    function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`;
      }

})
})