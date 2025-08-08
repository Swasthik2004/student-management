const API_KEY="we will"
const API_URL="https://api.openweathermap.org/data/2.5/weather"
//fecting html elements
const cityInput=document.getElementById("cityInput")
const searchbtn=document.getElementById("searchBtn")
const weatherDisplay=document.getElementById("weatherDisplay")
const error=document.getElementById("error")
const errorMessage=document.getElementById("errorMessage")

//weather display elements
const CityName=document.getElementById("cityName")
const temperature=document.getElementById("temperature")
const weatherDescription=document.getElementById("weatherDescription")
const feelslike=document.getElementById("feelsLike")
const humidity=document.getElementById("humidity")
const windowSpeed=document.getElementById("windSpeed")

searchbtn.addEventListener("click",handleSearch)
//use of arrow function
cityInput.addEventListener("keypress",(event)=>{
if(event.key==="Enter"){
  handleSearch()




}
})
//declaring the handle search function
function handleSearch(){
    const city=cityInput.ValueMax.trim()
    //input validation
if(!city){
    showError("Plese enter a City Name")
    return

}
//clear previous result and also loading
hideAllSections()
showLoading()
//to fecth the weather data
fecthWeatherData(city)

}
//fetch weather data function
async function fetchWeatherData(){
 try{
   const url=`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`




}
 catch{

    }
}