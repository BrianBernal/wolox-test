//  libraries
import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

//  components
import Button from 'UIElements/button/Button';

//  styles
import { logoFullColor } from 'assets';
import {
  HeaderWrapperSection, HeaderDiv, MenuNav, Link, MenuIcon,
} from './styles';

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

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
    <HeaderWrapperSection scrollUp={scrollUp} openMenu={openMenu}>
      <HeaderDiv scrollUp={scrollUp}>
        <img src={logoFullColor} alt='logo wolox' width='171px' />
        <MenuIcon onClick={() => setOpenMenu((open) => !open)} />
        <MenuNav openMenu={openMenu}>
          <Link as={NavHashLink} activeClassName='activeMenuItem' exact smooth to='/#start'>Inicio</Link>
          <Link as={NavHashLink} activeClassName='activeMenuItem' exact smooth to='/#benefits'>Beneficios</Link>
          <Link as={NavLink} activeClassName='activeMenuItem' exact to='/listado'>Listado</Link>
          <Button variant='router' to='/register'>Registro</Button>
        </MenuNav>
      </HeaderDiv>
    </HeaderWrapperSection>
  );
}
