export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._popupCloseButton = this._popupElement.querySelector(".popup__close-button");
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    //универсальная функция для открытия попапа
    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keyup", this._handleEscClose);
    }

    //универсальная функция для закрытия попапа
    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keyup", this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
                this.close();
            }
        });
    }
}