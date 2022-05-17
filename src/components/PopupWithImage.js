import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._photo = this._popupElement.querySelector('.popup__photo');
        this._imageName = this._popupElement.querySelector('.popup__description')
    }

    open(data) {
        super.open();
        this._photo.src = data.photo;
        this._photo.alt = data.text;
        this._imageName.textContent = data.text;
    }
}