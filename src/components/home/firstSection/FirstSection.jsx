//  libraries
import React from 'react';

//  styles
import { WelcomeWrapperSection, H1, ImageDiv } from './styles';

export default function FirstSection() {
  return (
    <WelcomeWrapperSection>
      <div className='welcome-container' id='start'>
        <H1>
          Bienvenido a tu <br /> <span className='bold'>Entrevista Técnica</span> en <br /><span className='bold green'>Wolox</span>
        </H1>
        <ImageDiv />
      </div>
    </WelcomeWrapperSection>
  );
}
