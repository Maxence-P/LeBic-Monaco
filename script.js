/*JS Header */
const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');


document.body.addEventListener('click', (e) => {
    if (e.target !== mobileBurger && e.target !== mobileBurgerButton && mobileBurger.style.display === 'flex') { mobileBurger.style.display = 'none'};
});


mobileBurgerButton.addEventListener('click', () => {
    mobileBurger.style.display = 'flex';
});

/*JS Home Page */




const cards = document.querySelector(".cards");

const eventList = [
  {
    name: "Ballets de Monte-Carlo, Monaco",
    picture: "https://cdm0lfbn.cloudimg.io/v7/_origin_/image_uploader/photos/bd/original/ballets-de-monte-carlo-at-grimaldi-forum-monaco-monaco-2.jpg?p=large"
  },
  {
    name: "Monte-Carlo Comedy Film Festival 2020",
    picture: "https://cdm0lfbn.cloudimg.io/v7/_origin_/image_uploader/photos/11/original/monte-carlo-comedy-film-festival-2020-monte-carlo-monte-carlo.jpg?p=large"
  },
 
];

function createCard(title, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
  
    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);
  
    // Step1: Create the cardBody div, add the class card-body and add it to the card
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardHeader.appendChild(cardBody);
  
    // Step2: Create the cardTitle h2, add the class card-title,
    // set the text inside the tag to the "title" parameter of this function
    // and add it to the cardBody
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = `${title}`;
    cardBody.appendChild(cardTitle);
  
    
  /*  const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Adopt Now";
    cardBody.appendChild(cardButton);*/
  }

  
  for (let i = 0; i < eventList.length; i++) {
    createCard(eventList[i].name, eventList[i].picture);
  }
