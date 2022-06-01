import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._form = this._popupElement.querySelector(".popup__form");
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