export default class Card {
  constructor(data, cardSelector, imagePopup, userId, { handleDeleteCard, handleLikeClick }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._imagePopup = imagePopup;
    this._cardSelector = cardSelector;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleDeleteCard = handleDeleteCard;
    this._likes = data.likes;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  // _like() {
  //   this.classList.toggle("element__like-button_active");
  // }

  deleteImageCard = () => {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._cardImage.addEventListener("click", this._imagePopup);

    // this._element
    //   .querySelector(".element__like-button")
    //   .addEventListener("click", this._like);


    this._element
      .querySelector(".element__trash-button").addEventListener('click', () => {
        this._handleDeleteCard(this._cardId);
      })

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick(this._cardId);
      });

  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;

    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    this._element.querySelector('.element__like-count').textContent = this._likes.length;

    this._hasDeleteButton();
    return this._element;
  }

  _hasDeleteButton() {
    if (this._userId !== this._cardOwnerId)
      this._element
        .querySelector(".element__trash-button").remove();
  }

  isLiked() {
    return this._isLiked;
  }

  setLike(data) {
    this._isLiked = data.likes.filter((item) => {
      return item._id = this._userId
    }).length > 0;
    this._element.querySelector('.element__like-count').textContent = data.likes.length;
    if (this._isLiked) {
      this._element
        .querySelector(".element__like-button").classList.add("element__like-button_active");
    }
    else {
      this._element
        .querySelector(".element__like-button").classList.remove("element__like-button_active");
    }
  }
}


