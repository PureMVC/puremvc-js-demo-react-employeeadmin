//
//  StartupCommand.js
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

import {SimpleCommand} from "@puremvc/puremvc-js-multicore-framework";
import {ApplicationFacade} from "../ApplicationFacade";
import {DeptEnum} from "../model/enum/DeptEnum.js";
import {RoleEnum} from "../model/enum/RoleEnum.js";
import {UserProxy} from "../model/UserProxy";
import {RoleProxy} from "../model/RoleProxy";
import {UserListEvents} from "components/UserListEvents";
import {UserFormEvents} from "components/UserFormEvents";
import {UserRoleEvents} from "components/UserRoleEvents";

export class StartupCommand extends SimpleCommand {

    execute(notification) {
        let users = [
            { username: "lstooge", first: "Larry", last: "Stooge", email: "larry@stooges.com", password: "ijk456", department: DeptEnum.ACCT },
            { username: "cstooge", first: "Curly", last: "Stooge", email: "curly@stooges.com", password: "xyz987", department: DeptEnum.SALES },
            { username: "mstooge", first: "Moe", last: "Stooge", email: "moe@stooges.com", password: "abc123", department: DeptEnum.PLANT }
        ];

        let roles = [
            { username: "lstooge", roles: [RoleEnum.PAYROLL, RoleEnum.EMP_BENEFITS] },
            { username: "cstooge", roles: [RoleEnum.ACCT_PAY, RoleEnum.ACCT_RCV, RoleEnum.GEN_LEDGER] },
            { username: "mstooge", roles: [RoleEnum.INVENTORY, RoleEnum.PRODUCTION, RoleEnum.SALES, RoleEnum.SHIPPING] }
        ];

        this.facade.registerProxy(new UserProxy(users));
        this.facade.registerProxy(new RoleProxy(roles));

        [
            UserListEvents.MOUNTED, UserListEvents.UNMOUNTED,
            UserFormEvents.MOUNTED, UserFormEvents.UNMOUNTED,
            UserRoleEvents.MOUNTED, UserRoleEvents.UNMOUNTED
        ].forEach(type =>
            window.addEventListener(type, event =>
                this.facade.sendNotification(ApplicationFacade.REGISTER, event.detail, type)
            )
        );
    }

}
