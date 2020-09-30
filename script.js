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

