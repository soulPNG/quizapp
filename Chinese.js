// Container element to hold the cards
const cardContainer = document.querySelector('.card-container');

// questions are inputed into the cards name/ what it shows on each side. 
const cardContent = [
  { front: '一个布尔值中有多少个 Btyes', back: '二'},
  { front: '名字是什么数据类型？', back: '字符串' },
  { front: '二进制中的第四个', back: '零一零零' },
  { front: '布尔值、日期、整数和浮点数就是一个例子吗？', back: '数据项' },
  { front: '（T/F）IPO 代表 输入、 处理、 输出', back: '真' }
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

