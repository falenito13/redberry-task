import axios from "axios";

class User {

    constructor() {
        this.init()
    }

    init() {
        this.user = localStorage.getItem('user')
        this.token = localStorage.getItem('userToken')
    }

    authenticated(data, callback) {
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('userToken', data.token)
        this.init()
        callback()
    }

    logout(callback) {
        localStorage.removeItem('user')
        localStorage.removeItem('userToken')
        this.init();
        callback();
    }

}

export default new User()

