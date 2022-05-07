
class UI {
   constructor() {
      this.city = document.getElementById('w-location');
      this.wCity = document.getElementById('w-city');
      this.desc = document.getElementById('w-desc');
      this.tempString = document.getElementById('w-tempString');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.pressure = document.getElementById('w-pressure');
      this.wind = document.getElementById('w-wind');
      this.wschodSlonca = document.getElementById('sunrise');
      this.zachodSlonca = document.getElementById('sunset');
      this.icon2 = document.getElementById('w-icon2');
      this.currentDate = document.getElementById('currentDate');
   }

   // CURRENT WEATHER
   paint(weather) {
      console.log(weather)
      this.city.textContent = weather.name + " " + weather.sys.country;
      this.desc.textContent = weather.weather[0].description;
      this.tempString.textContent = Math.floor(weather.main.temp) + "\u02DAC";
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
      this.feelsLike.textContent = Math.floor(weather.main.feels_like) + "\u02DAC";
      this.pressure.textContent = weather.main.pressure + "hPa";
      this.humidity.textContent = weather.main.humidity + "%";
      this.wind.textContent = weather.wind.speed + "m\u002Fs";
      this.wschodSlonca.textContent = 'Wschód: ' + getTime(weather.sys.sunrise);
      this.zachodSlonca.textContent = 'Zachód: ' + getTime(weather.sys.sunset);
      this.currentDate.textContent = currentDate();
   }


   location(city, state) {
      this.wCity.textContent = city + " \u2022 " + stateTranslation(state);
   }
}


function getTime(time) {
   const date = new Date(time * 1000);
   const addZero = value => (value < 10 && value > -1 ? '0' : "") + value;
   const timeText = addZero(date.getHours()) + ':' + addZero(date.getMinutes());
   return timeText;
}

function getDate(time) {
   const date = new Date(time * 1000);
   // const addZero = value => (value < 10 && value > -1 ? '0' : "") + value;
   const dateText = addZero(date.getDate()) + '\u002f' + addZero((date.getMonth() + 1));
   const day = dayOfTheWeek(date.getDay()) + " " + dateText;
   return day;
}

function currentDate() {
   const todaysDate = new Date();
   const weekday = todaysDate.getDay();
   const dayOfMonth = todaysDate.getDate();
   const currentMonth = todaysDate.getMonth();
   // const addZero = value => (value < 10 && value > -1 ? '0' : "") + value;
   const dateString = dayOfTheWeek(weekday) + " " + addZero(dayOfMonth) + "\u002f" + addZero((currentMonth + 1));
   return dateString;
}

function filterData(citiesArr) {
   const filteredData = citiesArr.filter((element, index, self) => self.findIndex((t) => {
      return ((Math.floor(t.lat) === Math.floor(element.lat)) && (Math.floor(t.lon) === Math.floor(element.lon)))
   }) === index)
   filteredData.sort((a, b) => b.lat - a.lat);
   createCityList(filteredData);
}

function addZero(value) {
   const output = (value < 10 && value > -1 ? '0' : "") + value;
   return output;
}

function dayOfTheWeek(dayIndex) {
   const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
   return days[dayIndex];

   // switch (day) {
   //    case 0:
   //       return ("Niedziela")
   //    case 1:
   //       return ("Poniedziałek")
   //    case 2:
   //       return ("Wtorek")
   //    case 3:
   //       return ("Środa")
   //    case 4:
   //       return ("Czwartek")
   //    case 5:
   //       return ("Piątek")
   //    case 6:
   //       return ("Sobota")
   // }
}


function stateTranslation(state) {
   switch (state) {
      case "West Pomeranian Voivodeship":
         return ("Zachodniopomorskie")
      case "Pomeranian Voivodeship":
         return ("Pomorskie")
      case "Warmian-Masurian Voivodeship":
         return ("Warmińsko-Mazurskie")
      case "Podlaskie Voivodeship":
         return ("Podlaskie")
      case "Lubusz Voivodeship":
         return ("Lubuskie")
      case "Greater Poland Voivodeship":
         return ("Wielkopolskie")
      case "Kuyavian-Pomeranian Voivodeship":
         return ("Kujawsko-Pomorskie")
      case "Łódź Voivodeship":
         return ("Łódzkie")
      case "Masovian Voivodeship":
         return ("Mazowieckie")
      case "Lublin Voivodeship":
         return ("Lubelskie")
      case "Łódź Voivodeship":
         return ("Województwo Łódzkie")
      case "Lower Silesian Voivodeship":
         return ("Dolnośląskie")
      case "Opole Voivodeship":
         return ("Opolskie")
      case "Silesian Voivodeship":
         return ("Śląskie")
      case "Lesser Poland Voivodeship":
         return ("Małopolskie")
      case "Subcarpathian Voivodeship":
         return ("Podkarpackie")
      default: return ""
   }
}