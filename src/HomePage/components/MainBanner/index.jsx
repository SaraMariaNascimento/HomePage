import React from "react";
import { BannerWrapper, TextSection, ButtonsSection } from './styled';
function MainBanner() {

    return (
        <>
          <BannerWrapper>
           <TextSection>
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ButtonsSection>
              <button className="start"><a href="/">Lorem ipsum</a></button>
              <button className="LearnMore"><a href="/">Lorem ipsum</a></button>
            </ButtonsSection>
           </TextSection>
            <img src="https://i.ibb.co/9TSnKw4/image-1.png" alt="Banner de tecnologia"/>
          </BannerWrapper>
        </>
      )
}
  
export default MainBanner;
  
