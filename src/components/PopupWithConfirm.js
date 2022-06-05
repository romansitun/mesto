import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._form = this._popupElement.querySelector(".popup__form");
        this._submitButton = this._form.querySelector('.popup__form-button');
        this._submitButtonValue = this._submitButton.textContent;
    }
    renderDeleteLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Удаление...'
        } else {
            this._submitButton.textContent = this._submitButtonValue;
        }
    }

    submitCallback(removing) {
        this._handleSubmit = removing;
    }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit();
        });
    }



}