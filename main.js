
const apikey = "304abe0f2ae1547fcbd3b7acdd73eae0"
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inputval = document.querySelector(".search input");
let button = document.querySelector(".search button");
let changepic = document.querySelector(".cloudimg");


button.addEventListener("click", () => {
    checkweather(inputval.value);

})

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.visibility = "hidden";
    }

    else{

    let data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humiditypercent").innerHTML = data.main.humidity + "%";
    document.querySelector(".windkmph").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds" ) {
        changepic.src = "./images/clouds.png"
    }
    else if (data.weather[0].main == "Mist") {
        changepic.src = "./images/mist.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        changepic.src = "./images/rain.png"
    }
    else if (data.weather[0].main == "Rain") {
        changepic.src = "./images/rain.png"
    }
    else if(data.weather[0].main == "Haze" || data.weather[0].main == "Clear") {
        changepic.src = "./images/clear.png"
    }
    else if(data.weather[0].main == "Snow") {
        changepic.src = "./images/snow.png"
    }

    document.querySelector(".weather").style.visibility = "visible";
    document.querySelector(".error").style.display = "none";

    }

}








