//
//  Application.jsx
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

import "../css/base.css";
import "../css/layout.css";
import "../css/theme.css";

import {ApplicationFacade} from "./ApplicationFacade.js";
import {UserList} from "components/UserList"
import {UserForm} from "components/UserForm"
import {UserRole} from "components/UserRole"

function Application() {

    ApplicationFacade
        .getInstance("EmployeeAdmin", key => new ApplicationFacade(key))
        .startup();

    return (
        <div className="fluid">
            <UserList />
            <UserForm />
            <UserRole />
        </div>
    )
}

export default Application
