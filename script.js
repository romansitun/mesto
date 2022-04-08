const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


const profilePopup = document.querySelector('.popup_type_edit'); 
const buttonShowProfilePopup = document.querySelector('.profile__button');
const buttonHideProfilePopup = document.querySelector('.popup__close-button_place_edit');
const profileFormElement = document.querySelector('.popup__form'); 
const nameInput = document.querySelector('.popup__form-item_type_name');
const jobInput = document.querySelector('.popup__form-item_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');


const buttonShowСardPopup = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_add-image');  
const buttonHideСardPopup = document.querySelector('.popup__close-button_place_add-image');
const imageAddFormElement = document.querySelector('.popup__form_type_add-image'); 

const cardAddButton = document.querySelector('.popup__form-button_action_add');
const cardTemplate = document.querySelector('#place-template').content;
const placesContainer = document.querySelector('.elements');

const cardTitle = document.querySelector('.element__title');
const cardImage = document.querySelector('.element__image'); 
const cardTitleInput = document.querySelector('.popup__form-item_type_title'); 
const cardLinkInput = document.querySelector('.popup__form-item_type_link'); 


const imagePopup = document.querySelector('.popup_type_open-image');
const buttonHideImagePopup = document.querySelector('.popup__close-button_place_open-image');
const imageName = document.querySelector('.popup__description');
const photo = document.querySelector('.popup__photo'); 





//универсальная функция для открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_opened');
};


//универсальная функция для закрытия попапа
function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

//Для открытия попапа редактирования профиля должна быть так же вынесена отдельная функция
function openProfilePopup() { 
  //заполняем поля формы 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  //вызываем функцию для открытия попапа 
  openPopup(profilePopup);
}; 

function openImagePopup(evt) {
  imageName.textContent = evt.target.alt;
  photo.src = evt.target.src;
  photo.setAttribute('alt', imageName.textContent);
  openPopup(imagePopup);
};


function profilePopupFormSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
};


const handleDeleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

function like (evt) {
  evt.target.classList.toggle('element__like-button_active');
};



//универсальная функция для отображения и добавления новых карточек
  function createCard (item) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const image = cardElement.querySelector('.element__image');
    image.src = item.link;
    image.alt = item.name;
    cardElement.querySelector('.element__title').textContent = item.name;
      
    cardElement.querySelector('.element__like-button').addEventListener('click', like);
    cardElement.querySelector('.element__trash-button').addEventListener('click', handleDeleteCard);
    image.addEventListener('click', openImagePopup);
  
    return cardElement;
  };
  
  function renderInitialCards(initialCards) {
    initialCards.forEach((newCard) => {
      placesContainer.append(createCard(newCard));
    })
  };

  renderInitialCards(initialCards);


  function cardPopupFormSubmitHandler (evt) {
    evt.preventDefault(); 
    const newCard = {};
    newCard.name = cardTitleInput.value,
    newCard.link = cardLinkInput.value;
    placesContainer.prepend(createCard(newCard));
    
    closePopup(cardPopup);
    cardPopup.reset();
  };


  imageAddFormElement.addEventListener('submit', cardPopupFormSubmitHandler);
  buttonShowProfilePopup.addEventListener ('click', openProfilePopup);
  buttonHideProfilePopup.addEventListener ('click', () => {closePopup(profilePopup)});
  profileFormElement.addEventListener('submit', profilePopupFormSubmitHandler);
  buttonShowСardPopup.addEventListener('click', () => {openPopup(cardPopup)});
  buttonHideСardPopup.addEventListener('click', () => {closePopup(cardPopup)});
  buttonHideImagePopup.addEventListener('click',  () => {closePopup(imagePopup)});

