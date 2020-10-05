import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { PageHeader } from 'antd';

const StyledHeader = styled.header``;

const Header = ({
  backRoute,
  subtitle = null,
  title = 'Hollywood Squares',
  ...props
}) => {
  const { push } = useHistory();
  const onBack = () => {
    push(backRoute);
  };
  return (
    <StyledHeader>
      <PageHeader
        onBack={backRoute ? onBack : null}
        title={title}
        subTitle={subtitle}
      />
    </StyledHeader>
  );
};

export default Header;
