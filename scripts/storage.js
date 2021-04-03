'use strict'

export class Storage {

    add(key, value) {
        this.key = key;
        this.value = value;
    }

    delete(key) {
        this.key = key;
    }

    update(key, value) {
        this.key = key;
        this.value = value;
    }

    get(key) {
        this.key = key;
    }
}