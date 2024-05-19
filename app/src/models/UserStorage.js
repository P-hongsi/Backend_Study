"use strict";

class UserStorage {
    static #users = {
        id: ['user1', 'user2', 'user3'],
        pw: ['1111', '2222', '3333'],
        email: ['email1', 'email2', 'email3'],
    };
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users[field]) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage