re2.value=haripad
function search()
{
    cplace=place.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cplace}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(d=>d.json()).then(res=>displaydata(res))
   
}
function displaydata(cityDetails)
{
   city=cityDetails.name
   ctemp=cityDetails.main.temp
   wheather=cityDetails.weather.main
   humidity=cityDetails.main.humidity
   speed=cityDetails.wind.speed
   rise=cityDetails.sys.sunrise
   set=cityDetails.sys.sunset
   eat=cityDetails.weather[0].main
 k=Math.floor(ctemp- 273)


   htmldata=`
   <div class="row px-3">
   <p class="light-text">City Name</p>
   <p class="ml-auto">${city}</p>
</div>
<div class="row px-3">
   <p class="light-text">Temperture</p>
   <p class="ml-auto">${k}&#176;</p>
</div>
<div class="row px-3">
   <p class="light-text">Weather</p>
   <p class="ml-auto">${eat}</p>
</div>
<div class="row px-3">
   <p class="light-text">Humidity</p>
   <p class="ml-auto">${humidity}</p>
</div>
<div class="row px-3">
   <p class="light-text">Wind-speed</p>
   <p class="ml-auto">${speed}</p>
</div>
<div class="row px-3">
   <p class="light-text">Sunrise</p>
   <p class="ml-auto">${rise}</p>
</div>
<div class="row px-3">
   <p class="light-text">Sunset</p>
   <p class="ml-auto">${set}</p>
</div>

   `


result.innerHTML=htmldata

html=` 
<h4 class="large-font mr-3">${k}&#176;</h4>
<h3 class="mt-3 mb-0" id="re2">${city}</h3>
<h3 class="mt-3 mb-0" id="re2">${eat}</h3>`

   res.innerHTML=html

}
