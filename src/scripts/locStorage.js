'use strict'

import {Storage} from './storage'

class LocalStorage extends Storage{
    add(key, value) {

        this.key = key;
        this.value = value;

        super.add(key, value)

        return new Promise((resolve, reject) => {
            resolve('added')
        });
    }
}

const storage = new LocalStorage();

storage.add('name','John')

    .then(function (result){
    console.log(result)
})

console.log(storage.key, storage.value);