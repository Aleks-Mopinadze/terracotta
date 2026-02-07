import * as React from 'react'
import {Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import {Header} from "../shared/components/Header";
import {Footer} from "../shared/components/Footer/Footer.tsx";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <Header/>
            <br/>
            <br/>
            <br/>
            <Outlet/>
            <br/>
            <br/>
            <br/>
            <Footer/>
            <TanStackRouterDevtools/>
        </React.Fragment>
    )
}
