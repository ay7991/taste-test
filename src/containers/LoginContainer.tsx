import React from "react";
import { redirect, useNavigate } from "react-router-dom";

const LoginContainer = (): React.JSX.Element => {
    const usernameFocusBlur = (event: any) => {
        const username = document.getElementsByTagName('input')[0];
        if (event.type === 'focus') username.placeholder = '';
        else if (event.type === 'blur') username.placeholder = 'Username';
    }

    const passwordFocusBlur = (event: any) => {
        const password = document.getElementsByTagName('input')[1];
        if (event.type === 'focus') password.placeholder = '';
        else if (event.type === 'blur') password.placeholder = 'Password';
    }

    const navigate = useNavigate();

    const login = (event: any) => {
        const input = document.getElementsByTagName('input');

        fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    username: input[0].value,
                    password: input[1].value
                },
            )
        })
        .then((res) => res.json())
        .then((data) => {
            if (data !== 'successful login') {
                
            }
        })
        .then(() => {
            navigate('/home');
        })
        .catch((err) => {
            console.log('The error belongs to LoginContainer.tsx: ', err);
        });
    }

    return (
        <main id="login" className="flex items-center justify-center h-screen">
            <section className="flex flex-col rounded-xl items-center border-solid border-black border-2 h-2/3 w-1/3">
                <h1 className="flex justify-center mt-16 mb-24 items-center text-5xl h-1/6 w-2/3"> Taste Test </h1>
                <form className="flex justify-center flex-col h-60 ">
                    <input className="loginInput" type="text" placeholder="Username" id="username" onFocus={usernameFocusBlur} onBlur={usernameFocusBlur}/>
                    <input className="loginInput" type="text" placeholder="Password" id="password" onFocus={passwordFocusBlur} onBlur={passwordFocusBlur}/>
                    <section className="flex justify-center">
                        <button className="loginButtons" type="button" onClick={login}>Login</button>
                        <button className="loginButtons" type="button" onClick={() => navigate('/signup')}>Sign Up</button>
                    </section>
                </form>
            </section>
        </main>
    );
};

export default LoginContainer;