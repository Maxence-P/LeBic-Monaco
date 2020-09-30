
const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');
const interetMonument = document.querySelector('.monument-button');
const interetAdresse = document.querySelector('.adresses-button');
const interetActivity = document.querySelector('.activity-button');
const wrapperActivity = document.querySelector('.wrapper-activity');
const wrapperMonument = document.querySelector('.wrapper-monument');
const wrapperAdresse = document.querySelector('.wrapper-adresses');

const interet = {
    monument:true,
    goodAdresse:true,
    activity:true,
};

document.addEventListener('click', (e) => {
    if (e.target !== mobileBurger && e.target !== mobileBurgerButton && mobileBurger.style.display === 'flex') { mobileBurger.style.display = 'none'};
});

mobileBurgerButton.addEventListener('click', () => {
    mobileBurger.style.display = 'flex';
});



interetMonument.addEventListener('click', () =>{
    interet.monument = !interet.monument;
    if (interet.monument) {
        wrapperMonument.style.display = 'flex';
        return;
    }
    wrapperMonument.style.display = 'none';
})

interetAdresse.addEventListener('click', () =>{
    interet.goodAdresse = !interet.goodAdresse;
    if (interet.goodAdresse) {
        wrapperAdresse.style.display = 'flex';
        return;
    }
    wrapperAdresse.style.display = 'none';
})

interetActivity.addEventListener('click', () =>{
    interet.activity = !interet.activity;
    if (interet.activity) {
        wrapperActivity.style.display = 'flex';
        return;
    };
    wrapperActivity.style.display = 'none';
});






