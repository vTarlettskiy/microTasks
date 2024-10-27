import React from 'react';
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Error404} from "../components/pages/Error404";
import {LoginPage} from "../components/pages/LoginPage";

type Props = {
    children: React.ReactNode
}

export const ProtectedRoute = ({children}: Props) => {

    const [isAuth, setIsAuth] = React.useState(false);

    return (
        <div>
            {isAuth ? children : <LoginPage/>}
        </div>
    );
};