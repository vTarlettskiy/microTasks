import React from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from "./components/pages/_styles";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    PROTECTED_PAGE: '/protected',
    ERROR_PAGE: '/page/error',
    // LOGIN: '/login',
} as const

function App() {

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <S.StyledHeader>
            <S.StyledHeader><S.HeaderTextStyled>HEADER</S.HeaderTextStyled></S.StyledHeader>
            <S.StyledBody>
                <S.StyledNav>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>Protected Page</NavLink></S.NavWrapper>
                    {/*<S.NavWrapper><NavLink to={PATH.LOGIN}>Login</NavLink></S.NavWrapper>*/}
                </S.StyledNav>
                <S.StyledContentBlock>
                    <S.HorizontalNavigation>
                        <S.LinkLikeButton>
                            <NavLink to={PATH.ADIDAS}>На главную</NavLink>
                        </S.LinkLikeButton>
                        <S.ButtonLikeLink onClick={navigateHandler}>Назад</S.ButtonLikeLink>
                    </S.HorizontalNavigation>
                    <Outlet/>
                </S.StyledContentBlock>
            </S.StyledBody>
            <S.StyledFooter>abibas 2023</S.StyledFooter>
        </S.StyledHeader>
    );
}



export default App;


