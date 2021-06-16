import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
export const SignUp = () => {
    const {store, actions} = useContext(Context);
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        last_name:"",
        email: "",
        id_document,
        phone,
        password
    });
    function handleUser(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    async function saveUser() {
        if(
            contact.name.trim() != "" &&
            contact.last_name.trim() != "" &&
			contact.email.trim() != "" &&
			contact.phone.trim() != "" &&
			contact.id_document.trim() != "" &&
			contact.password.trim() != ""
        ){
            await actions.sign_up(user);
        }
    }
    return(
        <div className="container">
        <div>
            <h1 className="text-center mt-5">User</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="phone"
                        className="form-control"
                        placeholder="Enter phone"
                        name="phone"
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>ID document</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your ID"
                        name="id_document"
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a password"
                        name="password"
                        onChange={handleUser}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary form-control"
                    onClick={async e => {
                        await saveUser();
                        history.push("/");
                    }}>
                    Save
                </button>
                <Link className="mt-3 w-100 text-center" to="/">
                    Back
                </Link>
            </form>
        </div>
    </div>
    )
}