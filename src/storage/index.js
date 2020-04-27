/**
 * 封装sessionStorage
 */

 const STORAGE_KEY = 'mall'
 export default {
    // 存储值
     setItem(key, value, module_name) {
        if(module_name) {
            let val = this.getItem(module_name)
            val[key] = value 
            this.setItem(module_name, value)
        } else {
            let val = this.getStorage()
            val[key] = value 
            window.sessionStorage.getItem(STORAGE_KEY, JSON.stringify(val))
        }
     },
     getItem(key, module_name) {    
        this.getStorage()[key]
     },
     getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY || {}))
     },
     clear(key, module_name) {
        let val = this.getStorage()
        if(module_name) {
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.getItem(STORAGE_KEY, JSON.stringify(val))
     }
 }