class Storage {
   constructor() {
      this.city;
      this.country;
      this.lat;
      this.lon;
      this.state;
      this.defaultCity = 'Warszawa';
      this.defaultCountry = 'PL';
      this.defaultLat = '52.229676';
      this.defaultLon = '21.012229'
      this.defaultState = 'Masovian Voivodeship'
   }

   getLocationData() {
      if (localStorage.getItem('city') === null) {
         this.city = this.defaultCity;
      } else {
         this.city = localStorage.getItem('city');
      }
      if (localStorage.getItem('country') === null) {
         this.country = this.defaultCountry;
      } else {
         this.country = localStorage.getItem('country');
      }
      if (localStorage.getItem('lat') === null) {
         this.lat = this.defaultLat;
      } else {
         this.lat = localStorage.getItem('lat');
      }
      if (localStorage.getItem('lon') === null) {
         this.lon = this.defaultLon;
      } else {
         this.lon = localStorage.getItem('lon');
      }
      if (localStorage.getItem('state') === null) {
         this.state = this.defaultState;
      } else {
         this.state = localStorage.getItem('state');
      }
      return {
         city: this.city,
         country: this.country,
         lat: this.lat,
         lon: this.lon,
         state: this.state,
      }
   }

   setLocationData(city, country, lat, lon, state, stationName) {
      localStorage.setItem('city', city);
      localStorage.setItem('country', country);
      localStorage.setItem('lat', lat);
      localStorage.setItem('lon', lon);
      localStorage.setItem('state', state);
      console.log("SET LOCALIZATION: " + city, country, lat, lon, state, stationName)
   }
}