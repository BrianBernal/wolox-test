/* eslint-disable jsx-a11y/anchor-is-valid */
//  libraries
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//  components
import Button from 'UIElements/button/Button';

//  styles
import { logoFullColor } from 'assets';
import {
  HeaderWrapperSection, HeaderDiv, MenuNav, Link,
} from './styles';

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const pointY = window.scrollY;
      const topScroll = pointY > 70;
      if (topScroll) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderWrapperSection scrollUp={scrollUp}>
      <HeaderDiv scrollUp={scrollUp}>
        <img src={logoFullColor} alt='logo wolox' width='171px' />
        <MenuNav>
          <Link href='#start' isActive={false}>Inicio</Link>
          <Link href='#benefits' isActive={false}>Beneficios</Link>
          <Link as={NavLink} activeClassName='activeMenuItem' exact to=''>Home</Link>
          <Button type='button'>Login</Button>
        </MenuNav>
      </HeaderDiv>
    </HeaderWrapperSection>
  );
}
