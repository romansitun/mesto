import {
  buttonHideImagePopup,
  imageName,
  photo,
  openPopup,
  imagePopup,
  closePopup,
} from "./index.js";

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _openImagePopup() {
    imageName.textContent = this._name;
    photo.src = this._link;
    photo.setAttribute("alt", imageName.textContent);
    openPopup(imagePopup);
  }

  _like() {
    this.classList.toggle("element__like-button_active");
  }

  _handleDeleteCard() {
    this.closest(".element").remove();
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._openImagePopup();
      });

    buttonHideImagePopup.addEventListener("click", () => {
      closePopup(imagePopup);
    });

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", this._like);

    this._element
      .querySelector(".element__trash-button")
      .addEventListener("click", this._handleDeleteCard);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;

    return this._element;
  }
}

export default Card;
