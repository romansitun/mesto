let popup = document.querySelector('.popup');
let buttonShow = document.querySelector('.profile__button');
let buttonHide = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form'); 
let nameInput = document.querySelector('.popup__form-item_type_name');
let jobInput = document.querySelector('.popup__form-item_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__occupation');


function openPopup(){
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function closePopup(){
    popup.classList.remove('popup_opened');
};


buttonShow.addEventListener ('click', openPopup);



buttonHide.addEventListener ('click', closePopup);



function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}


formElement.addEventListener('submit', formSubmitHandler); 
formElement.addEventListener('submit', closePopup); 
