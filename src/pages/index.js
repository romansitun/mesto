import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  profilePopup, buttonShowProfilePopup, profileFormElement,
  nameInput, jobInput, profileName, profileJob, buttonShowCardPopup, cardPopup,
  imageAddFormElement, placesContainer, config, imagePopup,
  deleteCardPopup,
  avatarEditPopup, profileAvatarEditButton, profileAvatar, avatarEditFormElement
} from '../utils/constants.js';


import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from '../components/PopupWithConfirm';
import Api from '../components/Api';



const api = new Api({
  serverUrl: 'https://mesto.nomoreparties.co/v1/cohort-42/',
  token: 'da2b0bcf-d08e-4c4f-a5b5-5131bea0378d',
});



let userId;

api.getInitialData()
  .then((data) => {
    const [userData, cardsData] = data;
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardList.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(err);
  })


const userInfo = new UserInfo(profileName, profileJob, profileAvatar)


const editProfilePopup = new PopupWithForm(profilePopup, {
  handleFormSubmit: (data) => {
    editProfilePopup.renderLoading(true);
    api.editProfile(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        editProfilePopup.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editProfilePopup.renderLoading(false);
        editProfilePopup.close()
      })
  }
})

editProfilePopup.setEventListeners();

const addNewCardPopup = new PopupWithForm(cardPopup, {
  handleFormSubmit: (data) => {
    addNewCardPopup.renderLoading(true);
    api.addNewCard(data)
      .then((res) => {

        cardList.addItem(createCard(res));
        addNewCardPopup.close();
        validationPopupAdd.toggleButtonState();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addNewCardPopup.renderLoading(false);
        addNewCardPopup.close()
      })
  }
})

addNewCardPopup.setEventListeners();



const avatarEdit = new PopupWithForm(avatarEditPopup, {
  handleFormSubmit: (data) => {
    avatarEdit.renderLoading(true);
    api.editAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
        avatarEdit.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarEdit.renderLoading(false);
        avatarEdit.close()
      })
  }
})

avatarEdit.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();

const openImagePopup = (evt) => {
  const data = {
    photo: evt.target.src,
    text: evt.target.closest('.element').querySelector('.element__title').textContent,
  }
  popupWithImage.open(data);
}


const popupTypeConfirm = new PopupWithConfirm(deleteCardPopup);
popupTypeConfirm.setEventListeners();


const createCard = (data) => {
  const card = new Card(data, "#place-template", openImagePopup, userId, {
    handleDeleteCard: (cardId) => {


      popupTypeConfirm.open();


      popupTypeConfirm.submitCallback(() => {
        popupTypeConfirm.renderDeleteLoading(true);
        api.deleteCard(cardId)
          .then(() => {
            popupTypeConfirm.close();
            card.deleteImageCard();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            popupTypeConfirm.renderDeleteLoading(false);
            popupTypeConfirm.close()
          })
      })
    },
    handleSetLike: (data) => {
      api.addCardLike(data)
        .then((data) => {
          card.handleLikeCard(data)
        })
        .catch((err) => {
          console.log(err);
        })
    },
    handleDeleteLike: (data) => {
      api.deleteCardLike(data)
        .then((data) => {
          card.handleLikeCard(data)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  })


  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({
  renderer: (card) => {
    cardList.addItem(createCard(card));
  }
}, placesContainer);






const validationPopupEdit = new FormValidator(config, profileFormElement);
const validationPopupAdd = new FormValidator(config, imageAddFormElement);
const validationPopupAvatar = new FormValidator(config, avatarEditFormElement);

validationPopupEdit.enableValidation();
validationPopupAdd.enableValidation();
validationPopupAvatar.enableValidation();


buttonShowProfilePopup.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.about;
  validationPopupEdit.resetValidation();
  editProfilePopup.open();

});


buttonShowCardPopup.addEventListener("click", () => {
  validationPopupAdd.resetValidation();
  addNewCardPopup.open();
});

profileAvatarEditButton.addEventListener('click', () => {
  validationPopupAvatar.resetValidation();
  avatarEdit.open();
})




