//  libraries
import React from 'react';

//  styles
import { WelcomeWrapperDiv, H1, ImageDiv } from './styles';

export default function FirstSection() {
  return (
    <WelcomeWrapperDiv>
      <div className='welcome-section'>
        <H1>
          Bienvenido a tu <br /> <span className='bold'>Entrevista Técnica</span> en <br /><span className='bold green'>Wolox</span>
        </H1>
        <ImageDiv />
      </div>
    </WelcomeWrapperDiv>
  );
}
