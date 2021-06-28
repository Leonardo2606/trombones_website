import React from 'react';
import { BodyContainer, BodySection, BodyFeatures, BodyHowItWorks,
    Bodyimg, BodySectionContent, BodyTitle, BodyParagraph,
    BodyPricingBox, PriceCard, BodyPriceMainTitle, BodyPriceTitle,
    BodyPriceParagraph, PriceSelectButton} from '../styled/body';
import medal from '../assets/medal.png';
import fire from '../assets/fire.png';
import truck from '../assets/truck.png';

function Body() {

    return (
        <BodyContainer>
            <BodyFeatures id='features'>
                <BodySection>
                    <Bodyimg src={fire}/>
                    <BodySectionContent>
                        <BodyTitle>Premium Materials</BodyTitle>
                        <BodyParagraph>
                            Our trombones use the shiniest brass which is sourced locally. 
                            This will increase the longevity of your purchase.
                        </BodyParagraph>
                    </BodySectionContent>
                </BodySection>
                <BodySection>
                    <Bodyimg src={truck}/>
                    <BodySectionContent>
                        <BodyTitle>Fast Shipping</BodyTitle>
                        <BodyParagraph>
                            We make sure you recieve your trombone as soon as we have 
                            finished making it. We also provide free returns if you are not satisfied.
                        </BodyParagraph>
                    </BodySectionContent>
                </BodySection>
                <BodySection>
                    <Bodyimg src={medal}/>
                    <BodySectionContent>
                        <BodyTitle>Quality Assurance</BodyTitle>
                        <BodyParagraph>
                            For every purchase you make, we will ensure there are no damages
                            or faults and we will check and test the pitch of your instrument.
                        </BodyParagraph>
                    </BodySectionContent>
                </BodySection>    
            </BodyFeatures>
            <BodyHowItWorks id='howItWorks'>
            <iframe  
                width="550" 
                height="315" 
                src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&controls=0&showinfo=0" 
                frameBorder="0" allowFullScreen></iframe>
            </BodyHowItWorks>
            <BodyPricingBox id='pricing'>
                <PriceCard>
                    <BodyPriceMainTitle>Tenor Trombone</BodyPriceMainTitle>
                    <BodyPriceTitle>$600</BodyPriceTitle>
                    <BodyPriceParagraph>
                        Lorem ipsum.
                        Lorem ipsum.
                        Lorem ipsum dolor.
                        Lorem ipsum.
                    </BodyPriceParagraph>
                    <PriceSelectButton className='priceSelectButton'>Select</PriceSelectButton>
                </PriceCard>
                <PriceCard>
                    <BodyPriceMainTitle>Bass Trombone</BodyPriceMainTitle>
                    <BodyPriceTitle>$900</BodyPriceTitle>
                    <BodyPriceParagraph>
                        Lorem ipsum.
                        Lorem ipsum.
                        Lorem ipsum dolor.
                        Lorem ipsum.
                    </BodyPriceParagraph>
                    <PriceSelectButton className='priceSelectButton'>Select</PriceSelectButton>
                </PriceCard>
                <PriceCard>
                    <BodyPriceMainTitle>Valve Trombone</BodyPriceMainTitle>
                    <BodyPriceTitle>$1200</BodyPriceTitle>
                    <BodyPriceParagraph>
                        Plays similar to a Trumpet
                        Great for Jazz Bands
                        Lorem ipsum dolor.
                        Lorem ipsum. babum.
                    </BodyPriceParagraph>
                    <PriceSelectButton className='priceSelectButton'>Select</PriceSelectButton>
                </PriceCard>
            </BodyPricingBox>
        </BodyContainer>
    )

}

export default Body;