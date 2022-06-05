export default class UserInfo {
    constructor(profileName, profileJob, profileAvatar) {
        this._name = profileName;
        this._job = profileJob;
        this._avatar = profileAvatar;
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
        }

    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}