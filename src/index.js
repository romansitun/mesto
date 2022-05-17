import './pages/index.css';
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import {
  initialCards, profilePopup, buttonShowProfilePopup, profileFormElement,
  nameInput, jobInput, profileName, profileJob, buttonShowCardPopup, cardPopup,
  imageAddFormElement, placesContainer, cardTitleInput, cardLinkInput, config, imagePopup
} from './utils/constants.js';


import Section from './components/Section.js';
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

const userInfo = new UserInfo(profileName, profileJob)


const editProfilePopup = new PopupWithForm(profilePopup, {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const data = editProfilePopup.getInputValues();
    userInfo.setUserInfo(data);
    console.log(data)
    editProfilePopup.close()
  }
})

editProfilePopup.setEventListeners();

const addNewCardPopup = new PopupWithForm(cardPopup, {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    addCard();
    addNewCardPopup.close();
    evt.target.reset();
    validationPopupAdd.toggleButtonState();
  }
})

addNewCardPopup.setEventListeners();


const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();

const openImagePopup = (evt) => {
  const data = {
    photo: evt.target.src,
    text: evt.target.closest('.element').querySelector('.element__title').textContent,
  }
  popupWithImage.open(data);
}


const generateCard = (card) => new Card(card, "#place-template", openImagePopup).generateCard();

const cardList = new Section({
  items: initialCards, renderer: (item) => {
    const cardElement = generateCard(item, "#place-template");
    placesContainer.append(cardElement);
  }
}, placesContainer);


cardList.renderItems();

function addCard() {
  const newCard = generateCard(
    {
      name: cardTitleInput.value,
      link: cardLinkInput.value,
    },
    "#place-template"
  );

  placesContainer.prepend(newCard);
}


const validationPopupEdit = new FormValidator(config, profileFormElement);
const validationPopupAdd = new FormValidator(config, imageAddFormElement);

validationPopupEdit.enableValidation();
validationPopupAdd.enableValidation();


buttonShowProfilePopup.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.job;
  editProfilePopup.open();
});


buttonShowCardPopup.addEventListener("click", () => {
  addNewCardPopup.open();
});
