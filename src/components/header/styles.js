import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import WrapperSection from 'UIElements/WrapperSection/WrapperSection';

const menuBreakPoint = '800px';

export const HeaderWrapperSection = styled(WrapperSection)`  
  position: fixed;
  z-index: 999;
  background-color: ${({ scrollUp }) => (scrollUp ? 'initial' : '#fff')};
  transition-property: background-color;
  transition-duration: 0.5s;
  
  @media screen and (max-width: ${menuBreakPoint}){
    padding-bottom: 1rem;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrollUp }) => (scrollUp ? '3rem' : '1rem')} 3rem;
  transition-property: padding;
  transition-duration: 0.5s;

  @media screen and (max-width: ${menuBreakPoint}){
    justify-content: center;
    padding: 1rem;
    img {
      display: none;
    }
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 10 rem;
  width: max-content;
  .activeMenuItem {
    border-bottom: ${({ theme }) => theme.palette.green} 2px solid;
  }
  @media screen and (max-width: ${menuBreakPoint}){
    flex-direction: column;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text};
  font-weight: 600;
  margin: 0 2rem;
  border-bottom: ${({ theme, isActive }) => (isActive ? `${theme.palette.green} 2px solid;` : 'initial')};
  &:hover {
    border-bottom: ${({ theme }) => theme.palette.blue} 2px solid;
  }
  
  @media screen and (max-width: ${menuBreakPoint}){
    margin: 1rem;
  }
`;

export const Router = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text};
  font-weight: 600;
  margin: 0 2rem;
`;
