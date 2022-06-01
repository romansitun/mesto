export default class Card {
  constructor(data, cardSelector, imagePopup, userId, { handleDeleteCard, handleSetLike, handleDeleteLike }) {
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
    this._handleSetLike = handleSetLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  deleteImageCard = () => {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._cardImage.addEventListener("click", this._imagePopup);

    this._element
      .querySelector(".element__trash-button").addEventListener('click', () => {
        this._handleDeleteCard(this._cardId);
      })

    this._element.querySelector('.element__like-button').addEventListener("click", () => {
      if (this._likeBtn.classList.contains('element__like-button_active')) {
        this._handleDeleteLike(this._cardId)
      } else {
        this._handleSetLike(this._cardId)
      }
    });

  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;

    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;


    this._likeBtn = this._element.querySelector('.element__like-button');
    this._likesCount = this._element.querySelector('.element__like-count');

    this._isCardLiked();
    this._hasDeleteButton();
    return this._element;
  }

  _hasDeleteButton() {
    if (this._userId !== this._cardOwnerId)
      this._element
        .querySelector(".element__trash-button").remove();
  }

  _isCardLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeBtn.classList.add('element__like-button_active');
    }
  }

  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesCount.textContent = this._likes.length;
    this._likeBtn.classList.toggle('element__like-button_active')
  }
}


