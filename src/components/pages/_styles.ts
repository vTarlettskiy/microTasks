import styled from "styled-components";

const HeaderTextStyled = styled.h1`
    margin-top: 0;
`

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;
    
    & > a {
        text-decoration: none;
        color: #1e3786;
    }
    
    & > a.active {
        text-decoration: none;
        color: #03eaff;
    }
    
    & > a:hover {
        color: steelblue;
    }
`

const StyledHeader = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const StyledBody = styled.div`
    display: flex;
`

const StyledNav = styled.div`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;
`

const StyledContentBlock = styled.div`
    background-color:#282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

const StyledFooter = styled.div`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px
`

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
`

export const S = {
    NavWrapper,
    StyledBody,
    StyledHeader,
    StyledFooter,
    StyledContentBlock,
    StyledNav,
    HeaderTextStyled,
    StyledImgContainer,
    StyledImg
}