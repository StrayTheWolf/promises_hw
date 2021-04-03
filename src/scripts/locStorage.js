'use strict'

import {Storage} from './storage'

class LocalStorage extends Storage {

    add(key, value) {
        this.value = value;

        return new Promise((resolve, reject) => {
            resolve(localStorage.setItem(key, value))
        });
    }

    get(key) {
        return new Promise((resolve, reject) => {
            localStorage.getItem(key)
            resolve('Get ' + key + ' ' + this.value);
        });
    }

    delete(key) {
        this.key = key;
        super.delete(key);

        return new Promise((resolve, reject) => {
            if (localStorage.getItem(key)) {
                localStorage.removeItem(key)
                resolve(this.key + ' Deleted')
            } else if (localStorage.getItem(key) !== this.key.toString()) {
                reject('Not found')
            }
        });
    }

    update(key, value) {
        this.value = value;

        return new Promise((resolve, reject) => {
            resolve(localStorage.setItem(key, value))
        });
    }
}

const storage = new LocalStorage();

storage.add('Name', 'Homer')
    .then(() => {
        console.log('added');
    });

storage.get('Name')
    .then(function (result) {
        console.log(result)
    });

storage.delete('Name')
    .then(function (result) {
        console.log(result)
    });

storage.update('Name', 'Bart')
    .then(() => {
        console.log('Modified')
    })
