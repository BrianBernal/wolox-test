//  libraries
import React, { useState, useEffect } from 'react';

//  components
import Button from 'UIElements/button/Button';

//  styles
import { logoFullColor } from 'assets';
import {
  HeaderWrapperSection, HeaderDiv, MenuNav, NavLinkRouter,
} from './styles';

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
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
    <HeaderWrapperSection scrollUp={scrollUp}>
      <HeaderDiv scrollUp={scrollUp}>
        <img src={logoFullColor} alt='logo wolox' width='171px' />
        <MenuNav>
          <NavLinkRouter exact to='/' className='menuItem' activeClassName='activeMenuItem'>Inicio</NavLinkRouter>
          <NavLinkRouter exact to='/' className='menuItem' activeClassName='activeMenuItem'>Beneficios</NavLinkRouter>
          <Button type='button'>Login</Button>
        </MenuNav>
      </HeaderDiv>
    </HeaderWrapperSection>
  );
}
