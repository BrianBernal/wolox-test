import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MaxDivWrapperDiv from 'components/maxWidthWrapperDiv/MaxDivWrapperDiv';

export const NavLinkRouter = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text};
  font-weight: 600;
  margin: 0 2rem;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem;
`;

export const WrapperDiv = styled(MaxDivWrapperDiv)`  
  position: fixed;
  width: 100%;  
  background-color: ${(props) => (props.scrollUp ? 'initial' : '#fff')};
`;

export const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 30rem;
  min-width: 10 rem;
  width: 38%;
`;
