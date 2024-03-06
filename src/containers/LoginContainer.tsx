import React from "react";

const LoginContainer = (): React.JSX.Element => {
    return (
        <main id="login" className="flex items-center justify-center h-screen">
            <section className="flex flex-col items-center border-solid border-black border-2 h-2/3 w-1/3">
                <h1 className="flex justify-center mt-20 mb-10 items-center text-5xl h-10 w-60"> Taste Test </h1>
                <form className="flex justify-center flex-col h-60 border-solid border-black border-2">
                    <input className="loginInput" type="text" placeholder="username" id="username" />
                    <input className="loginInput" type="text" placeholder="password" id="password" />
                    <button className="border-solid border-black border-2 w-36 h-16" type="submit">Login</button>
                </form>
            </section>
        </main>
    );
};

export default LoginContainer;