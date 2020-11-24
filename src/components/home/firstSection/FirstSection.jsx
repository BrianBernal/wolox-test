//  libraries
import React, { useRef } from 'react';

//  hooks
import useScrollY from 'hooks/useScrollY';

//  styles
import { WelcomeWrapperSection, H1 } from './styles';

export default function FirstSection() {
  const sectionRef = useRef(null);
  useScrollY('start', sectionRef);
  return (
    <WelcomeWrapperSection id='start' ref={sectionRef}>
      <div className='welcome-container'>
        <H1>
          Bienvenido a tu <br /> <span className='bold'>Entrevista Técnica</span> en <br /><span className='bold green'>Wolox</span>
        </H1>
      </div>
    </WelcomeWrapperSection>
  );
}
