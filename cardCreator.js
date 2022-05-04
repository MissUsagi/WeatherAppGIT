function createCards(element) {
   console.log(element)
   const cardContainer = document.getElementById('c-container')
   cardContainer.innerHTML = ""

   const dailyData = element.daily;
   dailyData.forEach((element, index) => {
      if (index > 0 && index < (dailyData.length - 1)) {
         const card = document.createElement('div');
         card.classList.add('w-card', 'mb-3', 'm-2', 'glass', 'p-2');


         const cardBody = `<div class="card-body">
      <h6 class="card-title text-light">${getDate(element.dt)}</h6>
      <span class="card-text">${element.weather[0].description}</span>
      <div class="additional-data justify-content-evenly">
         <span class="custom-text">${Math.floor(element.temp.max) + "\u02DAC"}</span>
         <img class="card-img img-fluid" src=${`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`} style="width: 70px" alt="">
         <span class="badge bg-light bg-opacity-50 card-text">${checkRain(element)}</span>
      </div>
      <div class="badge bg-light bg-opacity-50 text-center">
      <img class="ms-1" src="/img/sun.png" style="width: 20px"><span class="card-text w-data me-4 p-1">${Math.floor(element.temp.morn)}\u02DAC</span>
      <img src="/img/moon.png" style="width: 20px"><span class="card-text w-data p-1">${Math.floor(element.temp.night)}\u02DAC</span>
      </div>
      </div>`

         card.innerHTML = cardBody;
         cardContainer.appendChild(card);
      }
   });

};


function checkRain(element) {
   if (element.rain) { return Math.round(element.rain) + "mm" }
   else return "";
}