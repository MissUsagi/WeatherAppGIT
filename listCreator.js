function createCityList(city) {
   const listContainer = document.getElementById('city-list');
   listContainer.innerHTML = '';
   listContainer.classList.add('card');
   const cityList = document.createElement('ul');
   cityList.classList.add('list-group');

   city.forEach(element => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center');
      listElement.style.cursor = "pointer";
      listElement.textContent = `${element.name}` + " " + `${stateTranslation(element.state)}`;
      listElement.setAttribute("data-bs-dismiss", "modal");

      const spanGps = document.createElement('span');
      spanGps.classList.add('badge', 'bg-info');
      spanGps.textContent = "GPS \u007c " + `Lat: ${Math.round(element.lat * 10) / 10}` + " \u2022 " + `Lon: ${Math.round(element.lon * 10) / 10}`;

      listElement.append(spanGps);
      cityList.append(listElement);


      listElement.addEventListener('click', (e) => {
         weather.changeLocation(element.name, element.country, element.lat, element.lon, element.state);
         storage.setLocationData(element.name, element.country, element.lat, element.lon, element.state);
         getWeather();
         getOneCallData();
         ui.location(element.name, element.state);
      });
   });
   listContainer.append(cityList);
}
