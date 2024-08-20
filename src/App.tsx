import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    ERROR_PAGE: '/page/error',
} as const

function App() {
    return (
        <S.StyledHeader>
            <S.StyledHeader><S.HeaderTextStyled>HEADER</S.HeaderTextStyled></S.StyledHeader>
            <S.StyledBody>
                <S.StyledNav>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Prices</NavLink></S.NavWrapper>
                </S.StyledNav>
                <S.StyledContentBlock>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={':model/:id'} element={<Model/>}/>

                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        {/*<Route path={':puma/:id'} element={<Model/>}/>*/}

                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGE4} element={<Prices/>}/>

                        <Route path={PATH.ERROR_PAGE} element={<Error404/>}/>
                        <Route
                            path="*"
                            element={
                                <Navigate to={PATH.ERROR_PAGE} replace />
                            }
                        />
                        {/*<Route path={PATH.ERROR_PAGE} element={<Error404/>}/>*/}
                        {/*<Route path={'*'} element={<Navigate to={PATH.ERROR_PAGE}/>}/>*/}
                    </Routes>
                </S.StyledContentBlock>
            </S.StyledBody>
            <S.StyledFooter>abibas 2023</S.StyledFooter>
        </S.StyledHeader>
    );
}



export default App;


