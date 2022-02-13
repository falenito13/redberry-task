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

    isLoggedIn(){
        return localStorage.getItem('userToken');
    }

    logout(language) {
        localStorage.removeItem('user')
        localStorage.removeItem('userToken')
        this.init();
        window.location.href = `/${language}/login`
    }

}

export default new User()

