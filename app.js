//INIT storage Get stored location data
const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country, weatherLocation.lat, weatherLocation.lon, weatherLocation.state);
const ui = new UI();
ui.location(weather.city, weather.state);

//when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);
getOneCallData();

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   //przerobić na funkcję tylko do generowania
   const city = document.getElementById('city').value;
   const country = document.getElementById('country').value;
   // const lat = "";
   // const lon = "";
   // const state = "";

   weather.changeLocation(city, country);
   getWeather();

});

document.getElementById('city').addEventListener('keypress', (e) => {
   if (e.code === "Enter") {
      const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
      const lat = "";
      const lon = "";
      // const state = "";

      weather.changeLocation(city, country, lat, lon);
      //get weather again
      getWeather();
   }
});


function getWeather() {
   weather.getWeather() //async zwraca promise!!!!!!!!!!
      .then(result => {
         ui.paint(result)
      })
      .catch(err => console.log(err));
}

function getOneCallData() {
   weather.getOneCallData()
      .then(result => {
         createCards(result)
      })
      .catch(err => console.log(err));
}



