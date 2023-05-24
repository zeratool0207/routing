import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { email } from '../service/config';

const Login = () => {

    const navigate = useNavigate();
    const [ enteredId, setEnteredId ] = useState('');
    const [ enteredPw, setEnteredPw ] = useState('');

    console.log(localStorage.getItem('email'));
    console.log(email);


    const goLogin = () => {
        if (enteredId !== '' && enteredPw !== '') {
            localStorage.setItem('email', 'tirano@gmail.com');
        }
    }

    const goMain = () => {
       navigate('/main');
    }


    return (
        <>
            <div>
                <input
                    type="text"
                    name="enteredId"
                    value = { enteredId }
                    onChange = {(e) => setEnteredId(e.target.value)}
                />

                <input
                    type="password"
                    name="enteredPw"
                    value = { enteredPw }
                    onChange = { (e) => setEnteredPw(e.target.value)}
                />

                <button onClick={ () => goLogin()}> Login </button>
                <button onClick={ () => goMain() }> Main </button>
            </div>
        </>
    )
}

export default Login;