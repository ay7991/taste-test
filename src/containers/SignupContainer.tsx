import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Signup } from "../static/images/signup.svg";

const SignupContainer = (): React.JSX.Element => {
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

    const passwordRetypeFocusBlur = (event: any) => {
        const passwordRetype = document.getElementsByTagName('input')[2];
        if (event.type === 'focus') passwordRetype.placeholder = '';
        else if (event.type === 'blur') passwordRetype.placeholder = 'Retype Password';
    }

    const navigate = useNavigate();

    const signup = (event: any) => {
        const input = document.getElementsByTagName('input');

        fetch('/api/user/signup', {
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
            if (data !== 'successful signup') {
                throw new Error(data.err);
            }
        })
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            console.log('The error belongs to SignupContainer.tsx: ', err);
        });
        
    }

    return (
        <main className="flex items-center justify-center h-screen">
            <section id="signup" className="flex flex-col rounded-xl items-center h-2/3 w-1/3">
                <h1 className="flex justify-center mt-10 mb-36 items-center text-4xl h-1/6 w-2/3"> Create Your Account </h1>
                <form className="flex justify-center flex-col h-60">
                    <input className="signupInput" type="text" placeholder="Username" id="username" onFocus={usernameFocusBlur} onBlur={usernameFocusBlur}/>
                    <input className="signupInput" type="text" placeholder="Password" id="password" onFocus={passwordFocusBlur} onBlur={passwordFocusBlur}/>
                    <input className="signupInput" type="text" placeholder="Retype Password" id="passwordRetype" onFocus={passwordRetypeFocusBlur} onBlur={passwordRetypeFocusBlur}/>
                    <section className="flex justify-center">
                        <Signup className="bowl" type="button" onClick={signup} />
                    </section>
                </form>
            </section>
        </main>
    );
}

export default SignupContainer;