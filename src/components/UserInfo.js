export default class UserInfo {
    constructor(profileName, profileJob) {
        this._name = profileName;
        this._job = profileJob;
    }
    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            job: this._job.textContent
        }
        return userInfo
    }

    setUserInfo(data) {
        this._name.textContent = data.firstname;
        this._job.textContent = data.info;
    }
}