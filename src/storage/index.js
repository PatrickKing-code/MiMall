/**
 *  存储数据的格式
 *  {
 *      "user": {
 *          "username": "张三",
 *          "age": 19
 *       }
 *  }
 * 
 * 
*/

const STORAGE_KEY = 'mall'
export default {
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
    // 获取某一个模块 module_name下的 key属性
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            if (val) {
                return val[key]
            }
        }
        return this.getStorage()[key]
    },
    clearItem(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))
    }
}

