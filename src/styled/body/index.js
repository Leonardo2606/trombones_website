import styled from 'styled-components';

export const BodyContainer = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: 100%;
    margin: 50px auto;
`

export const BodyFeatures = styled.section`
    display: grid;
    grid-template-columns: 100%;
    margin: 30px 0 0 0;
`

export const BodySection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0; 
`

export const BodySectionContent = styled.div`
    word-wrap: wrap;
    width: 90%;
`

export const BodyTitle = styled.h1`
    font-weight: bold;
    margin: 0;
    padding: 0;
`

export const BodyParagraph = styled.p`
    margin: 0;
    padding: 0;
`

export const Bodyimg = styled.img`
    width: 50px;
    height: 50px;
`

export const BodyHowItWorks = styled.section`
    margin: 100px auto 140px auto;
`

export const BodyPricingBox = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const PriceCard = styled.article`
    width: 300px;
    border: 1px solid black;
    padding: 0;
    display: grid;
    grid-template-column: 100%;
    text-align: center;
    background-color: white;
`

export const BodyPriceMainTitle = styled.h1`
    background-color: rgb(206, 206, 206);
    width: 100%;
    padding: 10px 0;
    margin: 0;
    font-weight: 500;
`

export const BodyPriceTitle = styled.h1`
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    padding: 15px 0 10px 0;
`

export const BodyPriceParagraph = styled.p`
    word-wrap: wrap;
    width: 60%;
    height: 120px;
    margin: auto;
    padding: 0 0 20px 0;
    line-height: 30px;
`

export const PriceSelectButton = styled.button`
    width: 35%;
    background-color: rgb(236, 200, 42);
    padding: 5px;
    border: none;
    margin: 0 auto 20px auto;
    font-size: 1.3rem;
    font-weight: 100;
`