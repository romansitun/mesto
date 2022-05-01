import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const profilePopup = document.querySelector(".popup_type_edit");
const buttonShowProfilePopup = document.querySelector(".profile__button");
const buttonHideProfilePopup = document.querySelector(
  ".popup__close-button_place_edit"
);

const profileFormElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-item_type_name");
const jobInput = document.querySelector(".popup__form-item_type_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");

const buttonShowCardPopup = document.querySelector(".profile__add-button");
const cardPopup = document.querySelector(".popup_type_add-image");
const buttonHideCardPopup = document.querySelector(
  ".popup__close-button_place_add-image"
);
const imageAddFormElement = document.querySelector(
  ".popup__form_type_add-image"
);

const placesContainer = document.querySelector(".elements");
const cardTitleInput = document.querySelector(".popup__form-item_type_title");
const cardLinkInput = document.querySelector(".popup__form-item_type_link");
export const imagePopup = document.querySelector(".popup_type_open-image");
export const buttonHideImagePopup = document.querySelector(
  ".popup__close-button_place_open-image"
);
export const imageName = document.querySelector(".popup__description");
export const photo = document.querySelector(".popup__photo");

const config = {
  inputSelector: ".popup__form-item",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_inactive",
  inputErrorClass: "popup__form-item_type_error",
  errorClass: "popup__form-item-error_active",
};

function onDocumentKeyUp(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}

function hanldeOverlayClose(event) {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.target);
  }
}

//универсальная функция для открытия попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", onDocumentKeyUp);
  popup.addEventListener("click", hanldeOverlayClose);
}

//универсальная функция для закрытия попапа
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
  document.removeEventListener("mousedown", hanldeOverlayClose);
}

//Для открытия попапа редактирования профиля должна быть так же вынесена отдельная функция
function openProfilePopup() {
  //заполняем поля формы
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  //вызываем функцию для открытия попапа
  openPopup(profilePopup);
}

function profilePopupFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

function cardPopupFormSubmitHandler(evt) {
  evt.preventDefault();

  addCard();
  closePopup(cardPopup);
  evt.target.reset();
  validationPopupAdd.toggleButtonState();
}

const generateCard = (card) => new Card(card, "#place-template").generateCard();

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

initialCards.forEach((card) => {
  const cardElement = generateCard(card, "#place-template");
  document.querySelector(".elements").append(cardElement);
});

const validationPopupEdit = new FormValidator(config, profileFormElement);
const validationPopupAdd = new FormValidator(config, imageAddFormElement);

validationPopupEdit.enableValidation();
validationPopupAdd.enableValidation();

imageAddFormElement.addEventListener("submit", cardPopupFormSubmitHandler);
buttonShowProfilePopup.addEventListener("click", openProfilePopup);
buttonHideProfilePopup.addEventListener("click", () => {
  closePopup(profilePopup);
});
profileFormElement.addEventListener("submit", profilePopupFormSubmitHandler);
buttonShowCardPopup.addEventListener("click", () => {
  openPopup(cardPopup);
});
buttonHideCardPopup.addEventListener("click", () => {
  closePopup(cardPopup);
});
buttonHideImagePopup.addEventListener("click", () => {
  closePopup(imagePopup);
});
