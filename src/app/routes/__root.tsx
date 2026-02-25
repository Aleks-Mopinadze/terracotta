import * as React from 'react'
import {Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import { Header } from '../../widgets/Header';
import { Footer } from "../../widgets/Footer";


export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
            <TanStackRouterDevtools/>
        </React.Fragment>
    )
}
