
const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');
const interetMonument = document.querySelector('.monument-button');
const interetAdresse = document.querySelector('.adresses-button');
const interetActivity = document.querySelector('.activity-button');
const wrapperActivity = document.querySelectorAll('.wrapper-activity');
const wrapperMonument = document.querySelectorAll('.wrapper-monument');
const wrapperAdresse = document.querySelectorAll('.wrapper-adresses');

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

interetMonument.addEventListener('click', () => {
    interet.monument = !interet.monument;
    if (interet.monument) {
        wrapperMonument[0].style.display = 'flex';
        wrapperMonument[1].style.display = 'flex';

        return;
    }
    wrapperMonument[0].style.display = 'none';
    wrapperMonument[1].style.display = 'none';

})

interetAdresse.addEventListener('click', () => {
    interet.goodAdresse = !interet.goodAdresse;
    if (interet.goodAdresse) {
        wrapperAdresse[0].style.display = 'flex';
        wrapperAdresse[1].style.display = 'flex';

        return;
    }
    wrapperAdresse[0].style.display = 'none';
    wrapperAdresse[1].style.display = 'none';

})

interetActivity.addEventListener('click', () => {
    interet.activity = !interet.activity;
    if (interet.activity) {
        wrapperActivity[0].style.display = 'flex';
        wrapperActivity[1].style.display = 'flex';
        return;
    };
    wrapperActivity[0].style.display = 'none';
    wrapperActivity[1].style.display = 'none';

});






