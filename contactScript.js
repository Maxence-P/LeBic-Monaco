const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');
const wrapperHeader = document.querySelector('.header-wrapper');
const wrapperHeaderMobile = document.querySelector('.mobile-header');

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        wrapperHeader.style.opacity = .8;
        wrapperHeaderMobile.style.opacity = .8;
    } else {
        wrapperHeader.style.opacity = 1;
        wrapperHeaderMobile.style.opacity = 1;
    };
};

document.addEventListener('click', (e) => {
    if (e.target !== mobileBurger && e.target !== mobileBurgerButton && mobileBurger.style.display === 'flex') { 
        mobileBurger.style.display = 'none';
        mobileBurgerButton.src = 'src/burger.png';
        wrapperHeaderMobile.style.boxShadow = "0px 5px 4px 0px rgba(80, 80, 80, 0.75)";
    };
});

mobileBurgerButton.addEventListener('click', () => {
    if (mobileBurger.style.display === 'none' || mobileBurger.style.display === '') {
        mobileBurger.style.display = 'flex';
        mobileBurgerButton.src = 'src/close.png';
        wrapperHeaderMobile.style.boxShadow = "none";
        return;
    };
    mobileBurger.style.display = 'none';
    mobileBurgerButton.src = 'src/burger.png';
    wrapperHeaderMobile.style.boxShadow = "0px 5px 4px 0px rgba(80, 80, 80, 0.75)";
});

const valueForm = document.querySelectorAll('.getmyvalue');
const reponseForm = document.querySelector('.reponseFrom');
const formContact = document.querySelector('#formContact');
const arrowDown = document.querySelector('.arrowDown');

const createMessageForm = (tab) => {
    tab.author = tab.firstName + ' ' + tab.lastName + ' | ' + tab.mail;
    if (tab.adresse) { tab.author = tab.author + ' | ' + tab.adresse };
    const comName = document.createElement('div');
    comName.innerText = tab.author;
    comName.classList.add('comName');
    reponseForm.appendChild(comName);
    const comMsg = document.createElement('div');
    comMsg.innerText = tab.msg;
    comMsg.classList.add('comMsg');
    comName.appendChild(comMsg);
    const hr = document.createElement('hr');
    comName.appendChild(hr);
};


const getFormValue = () => {
    const tab = {};
    valueForm.forEach((el) => tab[el.id] = el.value);
    return tab;
};

formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    createMessageForm(getFormValue());
});


arrowDown.addEventListener('click', () => {
    if (reponseForm.style.display !== 'block') {
        reponseForm.style.display = 'block';
        arrowDown.style.transform = 'rotate(180deg)';
        return
    }
    reponseForm.style.display = 'none';
    arrowDown.style.transform = 'rotate(0deg)';
})