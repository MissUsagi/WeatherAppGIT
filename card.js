function createCards(dailyData) {
   const cardContainer = document.getElementById('c-container');
   cardContainer.innerHTML = "";

   dailyData.forEach((element, index) => {
      if (index > 0 & index < (element.length)) {
         console.log(index)
      }
   });

}

