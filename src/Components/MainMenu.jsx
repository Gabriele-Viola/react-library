import { NavLink } from "react-router";

export default function MainMenu() {
    return (
        <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/books">Books</NavLink>
            <NavLink href="/About">About</NavLink>
            <NavLink href="/Contacts">Contacts</NavLink>
        </nav>
    )
}