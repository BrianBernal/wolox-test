// libraries
import styled from 'styled-components';

//  components
import WrapperSection from 'UIElements/WrapperSection/WrapperSection';

export const BenefitsWrapperSection = styled(WrapperSection)`
  text-align: center;
  .benefits-container {
  }
`;

export const BenefitsListContainerDiv = styled.div`
display: grid;
grid-template-columns: repeat(${({ cols = 1 }) => cols}, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-auto-flow: column;
justify-items: center;
align-items: start;
text-align: center;
width: 100%;
column-gap: 2rem;

@media screen and (max-width: 1155px){
  grid-template-columns: repeat(${({ cols = 1 }) => Math.floor(cols / 2)}, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

@media screen and (max-width: 710px){
  grid-template-columns: repeat(${({ cols = 1 }) => Math.floor(cols / 3)}, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

@media screen and (max-width: 500px){
  grid-template-columns: repeat(${({ cols = 1 }) => Math.floor(cols / 4)}, 1fr);
  grid-template-rows: repeat(${({ cols = 1 }) => cols * 2}, 1fr);
}
`;

export const Divider = styled.hr`
  width: 100%;
  border: 3px solid #f5f6f9;
  margin: 3rem 0;
  box-shadow: #d2d8e8 0px 1px 12px 0px;
  border-top: none;
`;
