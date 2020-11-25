//  libraries
import React from 'react';

//  styles
import { WelcomeWrapperSection, H1 } from './styles';

export default function FirstSection() {
  return (
    <WelcomeWrapperSection id='start'>
      <div className='welcome-container'>
        <H1>
          Bienvenido a tu <br /> <span className='bold'>Entrevista Técnica</span> en <br /><span className='bold green'>Wolox</span>
        </H1>
      </div>
    </WelcomeWrapperSection>
  );
}
