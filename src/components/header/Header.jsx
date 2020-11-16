//  libraries
import React, { useState, useEffect } from 'react';

//  styles
import { logoFullColor } from 'assets';
import {
  WrapperDiv, ContainerHeader, MenuNav, NavLinkRouter,
} from './styles';

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 102;
      if (show) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <WrapperDiv scrollUp={scrollUp}>
      <ContainerHeader>
        <img src={logoFullColor} alt='logo wolox' width='200px' />
        <MenuNav>
          <NavLinkRouter exact to='/' className='menuItem' activeClassName='activeMenuItem'>Inicio</NavLinkRouter>
          <NavLinkRouter exact to='/' className='menuItem' activeClassName='activeMenuItem'>Beneficios</NavLinkRouter>
          <button type='button'>Login</button>
        </MenuNav>
      </ContainerHeader>
    </WrapperDiv>
  );
}
