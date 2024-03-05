import React, { useState } from 'react'
import { makeApi } from '../api/MakeApi';

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUserData((oldVal) => ({
            ...oldVal,
            [name]: value
        }))
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const loginUser = await makeApi('post', '/LoginUser', userData)
            console.log(loginUser);
            console.log(loginUser.token);
            const storeDataLocal = localStorage.setItem('Usertoken', loginUser.token)
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <form className='text-center border border-light p-5' onSubmit={HandleSubmit}>
                <p className="h4 mb-5">Login</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        id="email"
                        name='email'
                        value={userData.email}
                        onChange={HandleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        name='password'
                        value={userData.password}
                        onChange={HandleChange}
                    />
                </div>

                <button type="submit" className="btn btn-info btn-block my-4">
                    Login
                </button>
            </form>
        </>
    )
}

export default Login
