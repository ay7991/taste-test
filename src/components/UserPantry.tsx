import React from "react";

const UserPantry = (): React.JSX.Element => {
    return (
        <main>
            <section>
                <h1 id="pantry"> Your Pantry </h1>
            </section>
            <section>
                <form>
                    <input type="text" placeholder="food" id="ingredientInput"/>
                    <button> Add Ingredient </button>
                </form>
            </section>
        </main>
    );
};

export default UserPantry;