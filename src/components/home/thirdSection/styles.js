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
grid-template-rows: 2;
justify-items: center;
align-items: start;
text-align: center;
width: 100%;
column-gap: 2rem;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 3px solid #f5f6f9;
  margin: 3rem 0;
  box-shadow: #d2d8e8 0px 1px 12px 0px;
  border-top: none;
`;
