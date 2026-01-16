import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {Header} from "../shared/Header";
import {Footer} from "../shared/Footer";

const RootLayout = () => (
    <>
        <Header/>
        <Outlet />
        <Footer/>
        <TanStackRouterDevtools />
    </>
)

export const Route = createRootRoute({ component: RootLayout })