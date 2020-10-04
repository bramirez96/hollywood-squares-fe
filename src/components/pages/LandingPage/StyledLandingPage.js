import styled from 'styled-components';

const StyledLandingPage = styled.div`
  & > .ant-row {
    height: 100vh;
    .ant-tabs-nav {
      margin-bottom: 5vh;
      .ant-tabs-nav-wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        .ant-tabs-tab:not(:first-child) {
          margin-right: 0;
        }
      }
    }
    .ant-col-8 {
      padding: 20vh 2.5vw 2.5vh;
      text-align: center;
    }
  }
`;

export default StyledLandingPage;
