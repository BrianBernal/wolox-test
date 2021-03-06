//  libraries
import styled from 'styled-components';

//  components
import MaxDivWrapperSection from 'UIElements/WrapperSection/WrapperSection';

// images
import woloxWorker from 'assets/img_woloxer@3x.png';

export const WorkingWrapperSection = styled(MaxDivWrapperSection)`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  & > .working-container {
    display: flex;
    justify-content: center;
    max-width: 1366px;
    padding: 0;
    min-height: 26rem;
    & .bigTitle {
      font-size: 54px;
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;
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

  @media screen and (max-width: 900px) {
    width: initial;
  }
`;

export const TwitterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-right: 1rem;
    color: ${({ theme }) => theme.palette.secondary}
  }
`;
