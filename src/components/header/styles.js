import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MaxDivWrapperDiv from 'UIElements/maxWidthWrapperDiv/MaxDivWrapperDiv';

export const WrapperDiv = styled(MaxDivWrapperDiv)`  
  position: fixed;
  z-index: 999;
  background-color: ${({ scrollUp }) => (scrollUp ? 'initial' : '#fff')};
  transition-property: background-color;
  transition-duration: 0.5s;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrollUp }) => (scrollUp ? '3rem' : '1.5rem')} 3rem;
  transition-property: padding;
  transition-duration: 0.5s;
`;

export const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 30rem;
  min-width: 10 rem;
  width: max-content;
`;

export const NavLinkRouter = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text};
  font-weight: 600;
  margin: 0 2rem;
`;
