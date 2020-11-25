//  libraries
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';

//  components
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
    background-color: ${({ openMenu }) => (openMenu ? '#ddd' : 'inherit')};
    transition-duration: 0.3s;
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
    padding-bottom: 0;
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
  overflow: hidden;
  padding-bottom: 1px;
  .activeMenuItem {
    border-bottom: ${({ theme }) => theme.palette.green} 2px solid;
  }
  @media screen and (max-width: ${menuBreakPoint}){
    flex-direction: column;
    max-height: ${({ openMenu }) => (openMenu ? '90vh' : '3rem')};
    visibility: ${({ openMenu }) => (openMenu ? 'visible' : 'hidden')};
    transition-property: max-height;
    transition-duration: 0.8s;
    transition-timing-function: linear;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text};
  font-weight: 600;
  margin: 0 2rem;
  &:hover {
    border-bottom: ${({ theme }) => theme.palette.blue} 2px solid;
  }
  
  @media screen and (max-width: ${menuBreakPoint}){
    margin: 1rem;
  }
`;

export const MenuIcon = styled(MdMenu)`
  display: none;
  
  @media screen and (max-width: ${menuBreakPoint}){
    display: block;
    position: fixed;
    right: 10%;
    top: 30px;

    &:hover {
      cursor: pointer;
    }
  }
`;
