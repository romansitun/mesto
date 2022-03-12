let popup = document.querySelector('.popup');
let buttonShow = document.querySelector('.profile__button');
let buttonHide = document.querySelector('.popup__close-button');


buttonShow.addEventListener ('click', function(){
    popup.classList.add('popup_opened');
})


buttonHide.addEventListener ('click', function(){
    popup.classList.remove('popup_opened');
})


let formElement = document.querySelector('.popup__form'); 

let nameInput = document.querySelector('.popup__form-item_name');
let jobInput = document.querySelector('.popup__form-item_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__occupation').textContent = jobInput.value;

}

formElement.addEventListener('submit', formSubmitHandler); 