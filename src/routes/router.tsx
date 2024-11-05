import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    RouteObject,
    Outlet,
    Navigate,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Croses} from "../components/pages/Croses";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {LoginPage} from "../components/pages/LoginPage";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    PROTECTED_PAGE: '/protected',
    LOGIN: '/login',
    ERROR_PAGE: '/page/error',
    MODEL: ':model/:id'
} as const

export const PrivateRoutes = () => {

    const [isAuth, setIsAuth] = React.useState(false);

    return isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>

};

export const privateRoutes: RouteObject[] =

    [
        {
            path: PATH.PROTECTED_PAGE,
            element: <ProtectedPage/>
        }
    ]

export const publicRoutes: RouteObject[] =

    [
        {
            path: PATH.ADIDAS,
            element: <Adidas/>
        },
        {
            path: PATH.PUMA,
            element: <Puma/>
        },
        {
            path: PATH.ABIBAS,
            element: <Abibas/>
        },
        {
            path: PATH.PRICES,
            element: <Prices/>
        },
        {
            path: PATH.MODEL,
            element: <Model/>
        },
        {
            path: PATH.LOGIN,
            element: <LoginPage/>
        },
    ]


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR_PAGE}/>,
        children: [
            ...publicRoutes,
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            {
                path: "*",
                element: <Error404/>
            },
            {
                path: "/",
                element: <Adidas/>
            },
        ]
    }

]);