import React from "react";

const HomeScreen = (): React.JSX.Element => {
    interface favIngredientsInterface {
        [i: number] : {
            imgUrl: string,
            title: string
        }
    }

    interface mostRecipesInterface {
        [i: number] : {
            imgUrl: string,
            title: string,
            author: string,
            source: string,
        }
    }

    const favIngredients: favIngredientsInterface = {
        0: {
            imgUrl: '../static/images/fried-egg.png',
            title: 'Eggs'
        },
        1: {
            imgUrl: '../static/images/bread.png',
            title: 'Bread'
        },
        2: {
            imgUrl: '../static/images/soy-sauce.png',
            title: 'Soy Sauce'
        },
        3: {
            imgUrl: '../static/images/spring-onion.png',
            title: 'Scallions'
        },
        4: {
            imgUrl: '../static/images/chocolate.png',
            title: 'chocolate'
        },
        5: {
            imgUrl: '../static/images/mushroom.png',
            title: 'chocolate'
        }
    }

    const mostRecipes: mostRecipesInterface = {
        0: {
            imgUrl: '../static/images/book.png',
            title: 'Triple-Chocolate Brownies',
            author: 'Chris Morocco',
            source: 'Bon Appétit',
        },
        1: {
            imgUrl: '../static/images/book.png',
            title: 'Napa cabbage kimchi',
            author: 'Maangchi',
            source: 'Maangchi',
        },
        2: {
            imgUrl: '../static/images/book.png',
            title: 'Slow Roasted Turkey with Garlic and Herbs',
            author: 'Alison Roman',
            source: 'Alison Roman',
        },
        3: {
            imgUrl: '../static/images/book.png',
            title: 'Jollof Rice',
            author: 'Lola Osinkolu',
            source: 'Chef Lolas Kitchen',
        },
    }

    let i = 0;
    const favIngredientsArr = [];

    while (Object.keys(favIngredients)[i]) {
        favIngredientsArr.push(<img src={favIngredients[i].imgUrl} key={`${favIngredients[i].title}${i}`}/>);
        i += 1;
    }

    let j = 0;
    const mostRecipesArr = [];
    while (Object.keys(mostRecipes)[j]) {
        mostRecipesArr.push(<img src={mostRecipes[j].imgUrl} key={`${mostRecipes[j].title}${j}`}/>);
        j += 1;
    }

    return (
        <main>
            <section className="flex justify-center">
                <h1 className="faves"> Top 5 Ingredients </h1>
            </section>
            <section id="carousel-container" className="inline-flex overflow-hidden flex relative">
                <section id="carousel-track" className="inline-flex">
                    {favIngredientsArr.concat(favIngredientsArr)}
                </section>
            </section>
            <section className="flex justify-center">
                <h1 className="faves"> Most Used Recipes </h1>
            </section>
            <section id="carousel-container" className="inline-flex overflow-hidden flex relative">
                <section id="carousel-track" className="inline-flex">
                    {mostRecipesArr}
                </section>
            </section>
        </main>
    );
};

export default HomeScreen;