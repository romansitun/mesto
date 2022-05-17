import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, { handleFormSubmit }) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__form");
        this._inputs = Array.from(this._form.querySelectorAll('.popup__form-item'));
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
            this._handleFormSubmit(evt)
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}