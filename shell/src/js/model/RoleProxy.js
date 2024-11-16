//
//  RoleProxy.js
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

import {Proxy} from "@puremvc/puremvc-js-multicore-framework";
import {RoleEnum} from "./enum/RoleEnum.js";

/**
 * Definition of Role
 *
 * @typedef {Object} Role
 * @property {string} username
 * @param {Array<{id: number, name: string}>} [roles=[]]
 */

export class RoleProxy extends Proxy {

    static get NAME() { return "RoleProxy" }

    constructor(data) {
        super(RoleProxy.NAME, data);
    }

    findAllRoles() {
        return new Promise(resolve => {
            resolve(RoleEnum.comboList);
        });
    }

    findRolesByUsername(username) {
        return new Promise(resolve => {
            let result = this.roles.find(r => r.username === username);
            resolve(result ? result : {username, roles: []});
        });
    }

    updateRolesByUsername(username, roles) {
        return new Promise(resolve => {
            if (this.roles.find(r => r.username === username)) {
                this.data = this.roles.map(r => r.username === username ? {username, roles} : r);
            } else {
                this.roles.push({username, roles});
            }
            resolve(this.roles.find(r => r.username === username));
        });
    }

    /** @returns {Role[]} */
    get roles() {
        return this.data;
    }

}
