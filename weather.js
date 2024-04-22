const apiKey="bd2d5c279ab215e60a6df98cec41f00a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let input=document.querySelector(".search input");
let btn=document.querySelector(".search button");
let icon=document.querySelector(".weather-icon");

btn.addEventListener("click",()=>{
    checkWeather(input.value);
})
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
    if(response.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
    }else{
      let data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" Km/hr";

    if(data.weather[0].main=="Clouds"){
          icon.src="images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
          icon.src="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
          icon.src="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
          icon.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png";
    } 
    document.querySelector(".weather").style.display="block";
    }
}
