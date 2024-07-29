const apikey = "b89c65ff0841cf2c161b0be8bd0732d1"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?%20&units=metric&q="



const searchbox = document.querySelector("#city");
const search = document.querySelector("#icon")




async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    let data = await response.json()

    console.log(data);

    document.querySelector("#country").innerHTML = data.name;
    document.querySelector("#degree").innerHTML = Math.round(data.main.temp) + "&degC";
    document.querySelector("#percentage").innerHTML = data.main.humidity;
    document.querySelector("#Wind").innerHTML = data.wind.speed + " km/h";

}

search.addEventListener("click", () => {

    checkweather(searchbox.value);

})



checkweather();
