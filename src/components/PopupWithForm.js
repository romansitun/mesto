import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, { handleFormSubmit }) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__form");
        this._submitButton = this._form.querySelector('.popup__form-button');
        this._submitButtonValue = this._submitButton.textContent;
        this._inputs = Array.from(this._form.querySelectorAll('.popup__form-item'));
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Cохранение...'
        } else {
            this._submitButton.textContent = this._submitButtonValue;
        }
    }

    getInputValues() {
        const data = {};
        this._inputs.forEach((input) => {
            data[input.name] = input.value
        })
        return data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this.getInputValues())
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}