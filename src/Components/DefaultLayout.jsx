import { Outlet } from "react-router";
import MainMenu from './MainMenu'
export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="logo">
                    logo
                </div>
                <MainMenu />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                copyright 2024
            </footer>
        </>
    )
}