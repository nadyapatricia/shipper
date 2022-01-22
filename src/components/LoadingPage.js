import React from 'react';
import styled from '@emotion/styled';
import { Spin } from 'antd';

export default function LoadingPage() {
  return (
    <StyledContainer>
      <Spin size='large' style={{ color: '#ef4941' }} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`;
