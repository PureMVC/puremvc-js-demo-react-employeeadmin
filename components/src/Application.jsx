//
//  Application.jsx
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

import {UserList} from "./js/view/components/UserList.jsx";
import {UserForm} from "./js/view/components/UserForm.jsx";
import {UserRole} from "./js/view/components/UserRole.jsx";

function Application() {

  return (
    <>
        <UserList />
        <UserForm />
        <UserRole />
    </>
  )
}

export default Application
