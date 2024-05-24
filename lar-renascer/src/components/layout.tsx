import { Header } from "./header"
import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom';

export function Layout() {
    const location = useLocation();
    const pathname = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;
    const capitalizedPathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);

    return (
        <>
        <Header title={capitalizedPathname}  />
        <Outlet/>
        </>
    )
}