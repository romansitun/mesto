import { imageName, photo, openPopup, imagePopup } from "./index.js";

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

  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._openImagePopup();
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
    this._cardImage = this._element.querySelector(".element__image");
    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;

    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    return this._element;
  }
}

export default Card;
