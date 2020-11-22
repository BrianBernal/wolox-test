//  libraries
import React from 'react';

//  hooks
import useScrollY from 'hooks/useScrollY';

//  components
import Button from 'UIElements/button/Button';

//  styles
import { logoFullColor } from 'assets';
import {
  HeaderWrapperSection, HeaderDiv, MenuNav, Link,
} from './styles';

export default function Header() {
  const scrollUp = useScrollY();

  return (
    <HeaderWrapperSection scrollUp={scrollUp}>
      <HeaderDiv scrollUp={scrollUp}>
        <img src={logoFullColor} alt='logo wolox' width='171px' />
        <MenuNav>
          <Link href='#start' className='menuItem' activeClassName='activeMenuItem'>Inicio</Link>
          <Link href='#benefits' className='menuItem' activeClassName='activeMenuItem'>Beneficios</Link>
          <Button type='button'>Login</Button>
        </MenuNav>
      </HeaderDiv>
    </HeaderWrapperSection>
  );
}
