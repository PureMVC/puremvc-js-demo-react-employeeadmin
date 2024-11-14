import "./css/_base.css";
import "./css/_layout.css";
import "./css/_theme.css";

import {UserList} from "components/UserList"
import {UserForm} from "components/UserForm"
import {UserRole} from "components/UserRole"

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
