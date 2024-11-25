import { NavLink } from "react-router";

export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
        </nav>
    )
}