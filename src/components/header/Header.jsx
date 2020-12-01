//  libraries
import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink, useHistory } from 'react-router-dom';

//  hooks
import { useDispatch, useSelector } from 'react-redux';

//  redux
import { authLogin, authSignout } from 'redux/ducks/auth/actions';

//  components
import Button from 'UIElements/button/Button';

//  styles
import { logoFullColor } from 'assets';
import {
  HeaderWrapperSection, HeaderDiv, MenuNav, Link, MenuIcon, TextButton, FavoritesP,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogged = useSelector((state) => state.session.isLogged);
  const favorites = useSelector((state) => state.ui.favoriteTechs.length);
  const [scrollUp, setScrollUp] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (isLogged) { history.push('/techlist'); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

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
    if (isLogged) history.push('/techlist');
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignout = () => {
    dispatch(authSignout());
  };

  const handleLogin = () => {
    dispatch(authLogin());
  };

  return (
    <HeaderWrapperSection scrollUp={scrollUp} openMenu={openMenu}>
      <HeaderDiv scrollUp={scrollUp}>
        <img src={logoFullColor} alt='logo wolox' width='171px' />
        <MenuIcon fontSize='2rem' onClick={() => setOpenMenu((open) => !open)} />
        <MenuNav openMenu={openMenu}>
          {favorites > 0 && isLogged && <FavoritesP><i>Favoitas: </i>{favorites}</FavoritesP>}
          <Link as={NavHashLink} activeClassName='activeMenuItem' exact smooth to='/#start'>Inicio</Link>
          <Link as={NavHashLink} activeClassName='activeMenuItem' exact smooth to='/#benefits'>Beneficios</Link>
          {isLogged
            ? (
              <>
                <Link as={NavLink} activeClassName='activeMenuItem' exact to='/techlist'>Listado</Link>
                <TextButton onClick={handleSignout} className='signout'>Cerrar Sesión</TextButton>
              </>
            ) : (
              <>
                <TextButton onClick={handleLogin} className='signout'>Iniciar Sesión</TextButton>
                <Button variant='router' to='/register'>Registro</Button>
              </>
            )}
        </MenuNav>
      </HeaderDiv>
    </HeaderWrapperSection>
  );
}
