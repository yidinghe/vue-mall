const STORAGE_KEY = 'mall'

const STORAGE_MODULE_USER = 'user'
const STORAGE_KEY_USER_EMAIL = 'email'
const STORAGE_KEY_USER_ID = 'id'
const STORAGE_KEY_USER_ID_TOKEN = 'idToken'

export default {

    setUserEmail(email) {
        this.setItem(STORAGE_KEY_USER_EMAIL, email, STORAGE_MODULE_USER)
    },

    getUserEmail() {
       return this.getItem(STORAGE_KEY_USER_EMAIL, STORAGE_MODULE_USER)
    },

    setUserId(id) {
        this.setItem(STORAGE_KEY_USER_ID, id, STORAGE_MODULE_USER)
    },

    getUserId() {
       return this.getItem(STORAGE_KEY_USER_ID, STORAGE_MODULE_USER)
    },

    setUserIdToken(idToken) {
        this.setItem(STORAGE_KEY_USER_ID_TOKEN, idToken, STORAGE_MODULE_USER)
    },

    getUserIdToken() {
       return this.getItem(STORAGE_KEY_USER_ID_TOKEN, STORAGE_MODULE_USER)
    },

    logout() {
        window.sessionStorage.clear
    },

    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },

    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            if (val) return val[key]
        }
        return this.getStorage()[key]
    },

    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },

    clear(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}