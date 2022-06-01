export {
    profilePopup, buttonShowProfilePopup, buttonHideProfilePopup, profileFormElement,
    nameInput, jobInput, profileName, profileJob, buttonShowCardPopup, cardPopup, buttonHideCardPopup,
    imageAddFormElement, placesContainer, cardTitleInput, cardLinkInput, config, imagePopup
}



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
const imagePopup = document.querySelector(".popup_type_open-image");
export const buttonHideImagePopup = document.querySelector(
    ".popup__close-button_place_open-image"
);
export const imageName = document.querySelector(".popup__description");
export const photo = document.querySelector(".popup__photo");


export const deleteCardPopup = document.querySelector('.popup_type_confirm');
export const buttonShowConfirmPopup = document.querySelector('.element__trash-button');


export const avatarEditPopup = document.querySelector('.popup_type_edit-avatar');
export const profileAvatarEditButton = document.querySelector('.profile__image-edit-button');
export const profileAvatar = document.querySelector('.profile__image');
export const avatarEditFormElement = document.querySelector('.popup__form_type_edit-avatar');


const config = {
    inputSelector: ".popup__form-item",
    submitButtonSelector: ".popup__form-button",
    inactiveButtonClass: "popup__form-button_inactive",
    inputErrorClass: "popup__form-item_type_error",
    errorClass: "popup__form-item-error_active",
};