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
            resolve(localStorage.getItem(key));
        });
    }

    delete(key) {
        return new Promise((resolve, reject) => {
            resolve(localStorage.removeItem(key))
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
    .then(() => {
        console.log('deleted');
    });

storage.get('Name')
    .then(function (result) {
        console.log(result)
    });

storage.update('Name', 'Bart')
    .then(() => {
        console.log('Modified')
    })

storage.get('Name')
    .then(function (result) {
        console.log(result)
    });
