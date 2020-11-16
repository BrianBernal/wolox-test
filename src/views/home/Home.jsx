//  libraries
import React from 'react';

//  components
import Header from 'components/header/Header';

//  styles
// because bug eslint extension
// eslint-disable-next-line import/no-unresolved
import { WrapperDiv, H1, ImageDiv } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <WrapperDiv>
        <section className='welcome-section'>
          <H1>Bienvenido a tu <br /> <span className='bold'>Entrevista Técnica</span> en <br /><span className='bold green'>Wolox</span></H1>
          <ImageDiv />
        </section>
      </WrapperDiv>
    </>
  );
}
