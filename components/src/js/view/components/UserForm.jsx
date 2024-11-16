//
//  UserForm.jsx
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

import styles from "../../../css/form.module.css"
import {useEffect, useMemo, useState} from "react";
import {UserFormEvents} from "../events/UserFormEvents.js";

export const UserForm = () => {

	const defaultUser = {username: "", first: "", last: "", email: "", password: "", department: {id: 0, name: ""}};
	const [departments, setDepartments] = useState([]); // UI Data
	const [user, setUser] = useState(defaultUser); // User/Service/Input/Form Data
	const [confirm, setConfirm] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [error, setError] = useState(null);

	/**
	 * @typedef {Object} UserForm
	 * @property {(departments: {id: number, name: string}[]) => void} setDepartments
	 * @property {(user: User) => void} setUser
	 * @property {(error: string) => void} setError
	 * @property {() => void} reset
	 */
	const component = useMemo(() => ({
		setDepartments: setDepartments,
		setUser: (user) => {
			setEditMode(user.username !== "");
			setUser(user);
			setConfirm(user.password);
		},
		setError: setError,
		reset: () => {
			setEditMode(false);
			setUser({});
		}
	}), [setDepartments, setUser, setError]);

	useEffect(() => {
		dispatchEvent(new CustomEvent(UserFormEvents.MOUNTED, {detail: component}));
		return () => {
			dispatchEvent(new CustomEvent(UserFormEvents.UNMOUNTED));
		}
	}, [component]);

	const onChange = (event) => {
		const {id, value} = event.target;
		setUser(state => ({ // update fields
			...state, [id]: id === "department" ? departments.find(d => d.id === parseInt(value, 10)) : value
		}));
	}

	const onSave = () => {
		delete user.roles; // update user fields only without roles, roles are saved/updated separately.
		const type = editMode === false ? UserFormEvents.SAVE : UserFormEvents.UPDATE;
		dispatchEvent(new CustomEvent(type, {detail: user}));
		setUser(defaultUser);
	}

	const onCancel = () => {
		setEditMode(false);
		setUser(defaultUser);
		dispatchEvent(new CustomEvent(UserFormEvents.CANCEL));
	}

	const isValid = (user, confirm) => {
		return user.username !== "" && user.first !== "" && user.last !== "" && user.email !== "" &&
			user.password !== "" && user.password === confirm && user.department.id !== 0;
	}

	return (
		<section id="form">
			{error ? (
				<div className={styles.form}>
					<header><h2>User Form</h2></header>
					<main>Error: {error.message}</main>
				</div>
			) : (
				<div className={styles.form}>
					<header>
						<h2>User Form</h2>
					</header>
					<main>
						<ul>
							<li>
								<label htmlFor="first">First Name:</label>
								<input id="first" type="text" value={user.first} onChange={onChange} required/>
							</li>
							<li>
								<label htmlFor="last">Last Name:</label>
								<input id="last" type="text" value={user.last} onChange={onChange} required/>
							</li>
							<li>
								<label htmlFor="email">Email:</label>
								<input id="email" type="email" value={user.email} onChange={onChange} required/>
							</li>
							<li>
								<label htmlFor="username">Username:</label>
								<input id="username" type="text" value={user.username} onChange={onChange} required/>
							</li>
							<li>
								<label htmlFor="password">Password:</label>
								<input id="password" type="password" value={user.password} onChange={onChange} required/>
							</li>
							<li>
								<label htmlFor="confirm">Confirm:</label>
								<input id="confirm" type="password" value={confirm} onChange={event => setConfirm(event.target.value)} required/>
							</li>
							<li>
								<label htmlFor="department">Department:</label>
								<select id="department" value={user.department.id} onChange={onChange}>
									{departments.map(department => (
										<option key={department.id} value={department.id}>{department.name}</option>
									))}
								</select>
							</li>
						</ul>
					</main>
					<footer>
						<button className="primary" disabled={!isValid(user, confirm)}
						        onClick={() => onSave()}>{editMode === false ? "Save" : "Update"}</button>
						<button className="outline-primary" onClick={() => onCancel()}>Cancel
						</button>
					</footer>
				</div>
			)}
		</section>
	)
};

// !User.isValid(user)
