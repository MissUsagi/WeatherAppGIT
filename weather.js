'use strict';
const apiKey = API_KEY;
//.env (?)


class Weather {
   constructor(city, country, lat, lon, state) {
      console.log(this)
      //this.apiKey = API_KEY;
      this.city = city;
      this.country = country;
      this.lat = lat;
      this.lon = lon;
      this.state = state;
      console.log(city, country, lat, lon, state)
   }


   async getWeather() {
      const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.country}&limit=10&appid=${apiKey}`);
      const geoResponseData = await geoResponse.json();
      console.log(geoResponseData);

      filterData(geoResponseData);

      const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&lang=pl&appid=${apiKey}&units=metric`);
      const responseDataCurrent = await responseCurrent.json();
      console.log(responseDataCurrent);

      return responseDataCurrent;
   }

   async getOneCallData() {
      const responseOneCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly&lang=pl&appid=${apiKey}&units=metric`);
      const responseData = await responseOneCall.json();

      return responseData;
   }



   changeLocation(city, country, lat, lon, state) {
      this.city = city;
      this.country = country;
      this.lat = lat;
      this.lon = lon;
      console.log("CHANGE LOCATION:  " + city, country, lat, lon, state);
   }
}
