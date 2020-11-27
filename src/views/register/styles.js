import styled from 'styled-components';
import bgSection from 'assets/Backgrounds/Bg_Header@3x.png';
import bgWoloxer from 'assets/img_woloxer.png';

export const ContainerDiv = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  background: url(${bgSection}) repeat center 0;
  background-size: contain;

  h2 {
    align-self: flex-start;
    font-size: 28px;
    font-style: italic;
  }

  @media screen and (max-width: 600px){
    padding-top: 4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: auto;
  padding: 3rem;
  margin: 5px;
  background: url(${bgWoloxer}) no-repeat center;
  background-size: cover;
  color: ${({ theme }) => theme.palette.secondary};
  box-shadow:  ${({ theme }) => theme.palette.primary} 0px 5px 12px 0px;
  border-radius: 15px;

  button[type='submit'] {
    margin: 2rem 0;
  }
  
  @media screen and (max-width: 600px){
    padding: 2rem;
  }
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  width: ${({ column }) => (column ? '90%' : 'null')};
  input, label {
    width: ${({ column }) => (column ? '90%' : 'null')};
  }

  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.5rem 1rem;
  input, select {
    border: ${({ $error }) => ($error ? 'red' : 'rgba(29, 38, 58, 0.6)')} 1px solid;
  }
`;

export const TermsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-transform: none;
  font-family: montserrat, fira, 'Times New Roman', Times, serif;
  font-weight: normal;
  margin: 0.5rem 0;

  input[type='checkbox'] {
    width: 1rem;
  }

  a {
    color: ${({ theme }) => theme.palette.blue};
    font-style: italic;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorSpan = styled.div`
  color: red;
  text-transform: none;
  font-weight: normal;
`;
