import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import { useDispatch } from 'react-redux'; 
import { homescreen, pantry } from "../state/slices/pageSlice";

const Navbar = (): React.JSX.Element => {
    const dispatch = useDispatch();

    return (
        <nav>
            <NavLink onClick={() => dispatch(homescreen())} to='/home'>
                Home
            </NavLink>
            <NavLink onClick={() => dispatch(pantry())} to='/home'>
                Your Pantry
            </NavLink>
        </nav>
    );
};

export default Navbar;