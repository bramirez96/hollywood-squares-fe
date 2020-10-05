import styled from 'styled-components';

const StyledGameHome = styled.div`
  padding: 2.5vh 5vh;
  .ant-card {
    margin-bottom: 2.5vh;
    .ant-card-body {
      position: relative;
      .edit-form-toggle {
        color: red;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;

export default StyledGameHome;
