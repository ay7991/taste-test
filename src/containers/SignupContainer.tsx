import React from "react";
import { useNavigate } from "react-router-dom";

const SignupContainer = (): React.JSX.Element => {

    const navigate = useNavigate();

    return (
        <main id="signup" className="flex items-center justify-center h-screen">
            <section className="flex flex-col rounded-xl items-center border-solid border-black border-2 h-2/3 w-1/3">
                <h1 className="flex justify-center mt-20 mb-36 items-center text-5xl h-10 w-60"> Create Your Account </h1>
                <form className="flex justify-center flex-col h-60">
                    <input className="signupInput" type="text" placeholder="Username" id="username" />
                    <input className="signupInput" type="text" placeholder="Password" id="password" />
                    <section className="flex justify-center">
                        <button className="signupButtons" type="button">Sign Up</button>
                    </section>
                </form>
            </section>
        </main>
    );
}

export default SignupContainer;