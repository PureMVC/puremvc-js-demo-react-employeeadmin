//
//  RegisterCommand.js
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

import {SimpleCommand} from "@puremvc/puremvc-js-multicore-framework";
import {UserListEvents} from "components/UserListEvents";
import {UserFormEvents} from "components/UserFormEvents";
import {UserRoleEvents} from "components/UserRoleEvents";
import {UserListMediator} from "../view/UserListMediator";
import {UserFormMediator} from "../view/UserFormMediator";
import {UserRoleMediator} from "../view/UserRoleMediator";

export class RegisterCommand extends SimpleCommand {

    execute(notification) {
        switch (notification.type) {
            case UserListEvents.MOUNTED:
                this.facade.registerMediator(new UserListMediator(notification.body));
                break;
            case UserListEvents.UNMOUNTED:
                this.facade.removeMediator(UserListMediator.NAME);
                break;
            case UserFormEvents.MOUNTED:
                this.facade.registerMediator(new UserFormMediator(notification.body));
                break;
            case UserFormEvents.UNMOUNTED:
                this.facade.removeMediator(UserFormMediator.NAME);
                break;
            case UserRoleEvents.MOUNTED:
                this.facade.registerMediator(new UserRoleMediator(notification.body));
                break;
            case UserRoleEvents.UNMOUNTED:
                this.facade.removeMediator(UserRoleMediator.NAME);
                break;
            default:
                console.log(notification.type);
        }
    }

}
