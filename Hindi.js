// Container element to hold the cards
const cardContainer = document.querySelector('.card-container');

// questions are inputed into the cards name/ what it shows on each side. 
const cardContent = [
  { front: 'एक बूलियन में कितने Btyes हैं?', back: 'दो'},
  { front: 'पहला नाम किस प्रकार का डेटा है?', back: 'तार' },
  { front: 'बाइनरी में नंबर चार', back: 'शून्य एक शून्य शून्य' },
  { front: 'बूलियन, दिनांक, पूर्णांक और फ्लोटिंग बिंदु किसका एक उदाहरण है?', back: 'डेटा आइटम' },
  { front: '(T/F) IPO का मतलब इनपुट, प्रोसेस, आउटपुट है', back: 'सच्चा' }
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
  //the dropdown content will redirect the user to a page of 3 of the most common languages besides english, additionally once landed on those pages the english opton will replace current language
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

