import React, { MouseEventHandler, ReactElement } from "react";

const LoginContainer = (): React.JSX.Element => {
    const inputTransparent: MouseEventHandler = () => {
        const input = document.getElementsByTagName('input');
        input[0].placeholder = '';
    }

    return (
        <main id="login" className="flex items-center justify-center h-screen">
            <section className="flex flex-col rounded-xl items-center border-solid border-black border-2 h-2/3 w-1/3">
                <h1 className="flex justify-center mt-20 mb-36 items-center text-5xl h-10 w-60"> Taste Test </h1>
                <form className="flex justify-center flex-col h-60">
                    <input className="loginInput" type="text" placeholder="Username" id="username" onClick={inputTransparent}/>
                    <input className="loginInput" type="text" placeholder="Password" id="password" />
                    <section className="flex justify-center">
                        <button className="loginButtons" type="submit">Login</button>
                        <button className="loginButtons" type="submit">Sign Up</button>
                    </section>
                </form>
            </section>
        </main>
    );
};

export default LoginContainer;