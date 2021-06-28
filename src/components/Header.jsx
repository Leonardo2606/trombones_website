import React, { useState, useContext } from 'react';
import { HeaderContainer, HeaderSectionUp, 
    HeaderTitle, Headerimg, HeaderNav, 
    HeaderSectionBottom, HeaderButton, HeaderDescription,
    HeaderEmailInput } from '../styled/header';
import trombonePNG from '../assets/trombone.png';
import tromboneAccount from '../context/tromboneAccount';

function Header() {

    const [executed, setExecuted] = useState(false);
    const tromboneContext = useContext(tromboneAccount);

    return (
        <HeaderContainer>
            <HeaderSectionUp> 
                <HeaderTitle>
                    <Headerimg src={trombonePNG}/>
                    Original Trombones
                </HeaderTitle>
                <HeaderNav>
                    <HeaderButton
                        name='features' 
                        className='headerNavButtons'
                        onClick={tromboneContext.focusElement}>Features
                    </HeaderButton>
                    <HeaderButton 
                        name='howItWorks' 
                        className='headerNavButtons'
                        onClick={tromboneContext.focusElement}>How It Works
                    </HeaderButton>
                    <HeaderButton 
                        name='pricing' 
                        className='headerNavButtons'
                        onClick={tromboneContext.focusElement}>Pricing
                    </HeaderButton>
                </HeaderNav>
            </HeaderSectionUp>
            <HeaderSectionBottom
                    onSubmit={event => {
                        event.preventDefault();
                        tromboneContext.replaceEmailInput(executed, setExecuted);
                    }}>
                <HeaderDescription>Handcrafted, home-made masterpieces</HeaderDescription>
                <HeaderEmailInput
                    required
                    id='emailInput' 
                    type='email' 
                    placeholder='Enter your email adress'/>
                <HeaderButton 
                    className='getStartButton'
                    >Get Started
                </HeaderButton>
            </HeaderSectionBottom>
        </HeaderContainer>
    )

}

export default Header;