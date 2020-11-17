//  libraries
import styled from 'styled-components';

//  components
import MaxDivWrapperDiv from 'UIElements/maxWidthWrapperDiv/MaxDivWrapperDiv';

// images
import woloxWorker from 'assets/img_woloxer@3x.png';

export const WorkingWrapperDiv = styled(MaxDivWrapperDiv)`
  display: flex;
  justify-content: center;
  & > .content {
    display: flex;
    justify-content: center;
    max-width: 1366px;
    padding: 0;
    min-height: 26rem;
    & .bigTitle {
      font-size: 54px;
    }
  }
`;

const bgBox = `url(${woloxWorker}) no-repeat center center;`;

export const Box = styled.div`
  width: ${({ width = '45%' }) => width};
  padding: 4rem;
  background: ${({ withBgImage, theme }) => (withBgImage ? bgBox : theme.palette.background.dark)};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
