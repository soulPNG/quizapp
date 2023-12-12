// Container element to hold the cards
const cardContainer = document.querySelector('.card-container');

// questions are inputed into the cards name/ what it shows on each side. 
const cardContent = [
  { front: '¿Cuántos Btyes hay en un booleano?', back: 'Dos'},
  { front: '¿Qué tipo de datos es un nombre?', back: 'Cuerda' },
  { front: 'Número cuatro en binario', back: 'cero uno cero cero' },
  { front: '¿Booleanos, fechas, números enteros y coma flotante son ejemplos de?', back: 'tipo de datos' },
  { front: '(V/F) IPO significa Entrada, Proceso, Salida', back: 'Verdadero' }
];

// Loop through the content array to create cards
cardContent.forEach((content, index) => {
  // Create a new card div
  const card = document.createElement('div');
  card.classList.add('card');

  // Create front and back divs
  const front = document.createElement('div');
  front.classList.add('front');
  front.textContent = content.front;

  const back = document.createElement('div');
  back.classList.add('back');
  back.textContent = content.back;

  // Append front and back to the card
  card.appendChild(front);
  card.appendChild(back);

  // Append the card to the container
  cardContainer.appendChild(card);

  // Add click event listener to toggle 'flipped' class
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
  //the dropdown content will redirect the user to a page of 3 of the most common languages besides english
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}



