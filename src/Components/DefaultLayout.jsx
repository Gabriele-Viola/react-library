import { Outlet } from "react-router";
import MainMenu from './MainMenu'
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
export default function DefaultLayout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}