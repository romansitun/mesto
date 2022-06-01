(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var a,u,c=this,l=i.handleDeleteCard,s=i.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u=function(){c._element.remove(),c._element=null},(a="deleteImageCard")in this?Object.defineProperty(this,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):this[a]=u,this._data=e,this._name=e.name,this._link=e.link,this._imagePopup=r,this._cardSelector=n,this._userId=o,this._cardId=e._id,this._cardOwnerId=e.owner._id,this._handleDeleteCard=l,this._likes=e.likes,this._handleLikeClick=s}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",this._imagePopup),this._element.querySelector(".element__trash-button").addEventListener("click",(function(){e._handleDeleteCard(e._cardId)})),this._element.querySelector(".element__like-button").addEventListener("click",(function(){e._handleLikeClick(e._cardId)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._element.querySelector(".element__like-count").textContent=this._likes.length,this._hasDeleteButton(),this._element}},{key:"_hasDeleteButton",value:function(){this._userId!==this._cardOwnerId&&this._element.querySelector(".element__trash-button").remove()}},{key:"isLiked",value:function(){return this._isLiked}},{key:"setLike",value:function(e){var t=this;this._isLiked=e.likes.filter((function(e){return e._id=t._userId})).length>0,this._element.querySelector(".element__like-count").textContent=e.likes.length,this._isLiked?this._element.querySelector(".element__like-button").classList.add("element__like-button_active"):this._element.querySelector(".element__like-button").classList.remove("element__like-button_active")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.textContent=t,n.classList.add(o._errorClass)})),r(this,"_hideInputError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.classList.remove(o._errorClass),t.textContent=""})),r(this,"_isValid",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,o;return t=e,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();const i=o;var a=document.querySelector(".popup_type_edit"),u=document.querySelector(".profile__button"),c=(document.querySelector(".popup__close-button_place_edit"),document.querySelector(".popup__form")),l=document.querySelector(".popup__form-item_type_name"),s=document.querySelector(".popup__form-item_type_job"),f=document.querySelector(".profile__name"),p=document.querySelector(".profile__occupation"),h=document.querySelector(".profile__add-button"),d=document.querySelector(".popup_type_add-image"),_=(document.querySelector(".popup__close-button_place_add-image"),document.querySelector(".popup__form_type_add-image")),y=document.querySelector(".elements"),m=(document.querySelector(".popup__form-item_type_title"),document.querySelector(".popup__form-item_type_link"),document.querySelector(".popup_type_open-image")),v=(document.querySelector(".popup__close-button_place_open-image"),document.querySelector(".popup__description"),document.querySelector(".popup__photo"),document.querySelector(".popup_type_confirm")),b=(document.querySelector(".element__trash-button"),document.querySelector(".popup_type_edit-avatar")),g=document.querySelector(".profile__image-edit-button"),k=document.querySelector(".profile__image"),S=document.querySelector(".popup__form_type_edit-avatar"),E={inputSelector:".popup__form-item",submitButtonSelector:".popup__form-button",inactiveButtonClass:"popup__form-button_inactive",inputErrorClass:"popup__form-item_type_error",errorClass:"popup__form-item-error_active"};function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._popupCloseButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function B(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._photo=t._popupElement.querySelector(".popup__photo"),t._imageName=t._popupElement.querySelector(".popup__description"),t}return t=a,(n=[{key:"open",value:function(e){q(T(a.prototype),"open",this).call(this),this._photo.src=e.photo,this._photo.alt=e.text,this._imageName.textContent=e.text}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function N(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._popupElement.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__form-button"),n._submitButtonValue=n._submitButton.textContent,n._inputs=Array.from(n._form.querySelectorAll(".popup__form-item")),n}return t=a,(n=[{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Cохранение...":this._submitButtonValue}},{key:"getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;A(F(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e.getInputValues())}))}},{key:"close",value:function(){A(F(a.prototype),"close",this).call(this),this._form.reset()}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._job=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function Q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function X(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popupElement.querySelector(".popup__form"),t}return t=a,(n=[{key:"submitCallback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;K(Y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.serverUrl,this._token=t.token}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return e._handleResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._token}}).then((function(t){return e._handleResponse(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.firstname,about:e.info})}).then((function(e){return t._handleResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._handleResponse(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._handleResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return t._handleResponse(e)}))}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-42/",token:"da2b0bcf-d08e-4c4f-a5b5-5131bea0378d"}),re=null;ne.getInitialData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];console.log(i),oe.setUserInfo(o),oe.setUserAvatar(o),fe.renderItems(i),re=o._id})).catch((function(e){console.log(e)}));var oe=new M(f,p,k),ie=new J(a,{handleFormSubmit:function(e){ie.renderLoading(!0),ne.editProfile(e).then((function(e){oe.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.renderLoading(!1),ie.close()}))}});ie.setEventListeners();var ae=new J(d,{handleFormSubmit:function(e){ae.renderLoading(!0),ne.addNewCard(e).then((function(e){fe.addItem(se(e)),ae.close(),he.toggleButtonState()})).catch((function(e){console.log(e)})).finally((function(){ae.renderLoading(!1),ae.close()}))}});ae.setEventListeners();var ue=new J(b,{handleFormSubmit:function(e){ue.renderLoading(!0),ne.editAvatar(e).then((function(e){oe.setUserAvatar(e),ue.close()})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1),ue.close()}))}});ue.setEventListeners();var ce=new x(m);ce.setEventListeners();var le=function(e){var t={photo:e.target.src,text:e.target.closest(".element").querySelector(".element__title").textContent};ce.open(t)},se=function(e){var n=new t(e,"#place-template",le,re,{handleDeleteCard:function(e){_e.open(),_e.submitCallback((function(){ne.deleteCard(e).then((function(){_e.close(),n.deleteImageCard()})).catch((function(e){console.log(e)}))}))},handleLikeClick:function(e){(n.isLiked()?ne.deleteCardLike(e):ne.addCardLike(e)).then((function(e){n.setLike(e)}))}});return n.generateCard()},fe=new C({renderer:function(e){fe.addItem(se(e))}},y),pe=new i(E,c),he=new i(E,_),de=new i(E,S);pe.enableValidation(),he.enableValidation(),de.enableValidation(),u.addEventListener("click",(function(){var e=oe.getUserInfo();l.value=e.name,s.value=e.about,pe.resetValidation(),ie.open()})),h.addEventListener("click",(function(){he.resetValidation(),ae.open()})),g.addEventListener("click",(function(){de.resetValidation(),ue.open()}));var _e=new Z(v);_e.setEventListeners()})();