import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
`

export const HeaderSectionUp = styled.section`
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(241, 240, 233);
    @media (max-width: 700px) {
        height: 60px;
    }
`

export const HeaderSectionBottom = styled.form`
    width: 100%;
    margin-top: 80px;
    text-align: center;
    display: grid;
    grid-template-columns: 100%;
`

export const HeaderTitle = styled.h1`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    align-items: center;
    margin-left: 100px;
    @media (max-width: 700px) {
        width: 45%;
        margin: auto 5px;
        font-size: 1.2rem;
    }
`

export const HeaderDescription = styled.h1`
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.5rem;
`

export const HeaderEmailInput = styled.input`
    width: 250px;
    padding: 5px;
    margin: auto;
`

export const Headerimg = styled.img`
    margin-right: 10px;
    width: 30px;
    hegiht: 30px;
`

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 40%;
    @media (max-width: 700px) {
        width: 55%;
    }
`

export const HeaderButton = styled.button`
    border: none;
`

