import React from "react";

import Navbar from "../components/Navbar";
import HomeScreen from "../components/HomeScreen";
import UserPantry from "../components/UserPantry";

import { RootState } from "../state/store";
import { useSelector } from 'react-redux';

const HomeContainer = (): React.JSX.Element => {
    let { pageActive } = useSelector((state: RootState) => state.page);
    let page: React.JSX.Element;
    
    if (pageActive === 'homescreen') page = (<HomeScreen />);
    else if (pageActive === 'pantry') page = (<UserPantry />);

    return (
        <main className='flex flex-col'>
            <section className='flex justify-end'>
                <Navbar />
            </section>
            <section>
                {page}
            </section>
        </main>
    );
}

export default HomeContainer;