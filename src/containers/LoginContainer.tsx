import React, { MouseEventHandler, ReactElement } from "react";

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

    return (
        <main id="login" className="flex items-center justify-center h-screen">
            <section className="flex flex-col rounded-xl items-center border-solid border-black border-2 h-2/3 w-1/3">
                <h1 className="flex justify-center mt-20 mb-36 items-center text-5xl h-10 w-60"> Taste Test </h1>
                <form className="flex justify-center flex-col h-60">
                    <input className="loginInput" type="text" placeholder="Username" id="username" onFocus={usernameFocusBlur} onBlur={usernameFocusBlur}/>
                    <input className="loginInput" type="text" placeholder="Password" id="password" onFocus={passwordFocusBlur} onBlur={passwordFocusBlur}/>
                    <section className="flex justify-center">
                        <button className="loginButtons" type="button">Login</button>
                        <button className="loginButtons" type="button">Sign Up</button>
                    </section>
                </form>
            </section>
        </main>
    );
};

export default LoginContainer;