import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DESKTOP_BREAKPOINT } from '../constants';

export default function PageHeader() {
  return (
    <Container>
      <Title>
        <StyledH1>DRIVER MANAGEMENT</StyledH1>
        <p>Data driver yang bekerja dengan anda</p>
      </Title>
      <ActionContainer>
        <StyledSearchBar placeholder='Cari driver' />
        <StyledButton icon={<PlusOutlined />} danger type='primary'>
          Tambah Driver
        </StyledButton>
      </ActionContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: #fff;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  ${DESKTOP_BREAKPOINT} {
    flex-direction: row;
    align-items: center;
    padding: 10px 20px 10px 20px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;

  ${DESKTOP_BREAKPOINT} {
    margin-top: 15px;
  }
`;

const ActionContainer = styled.div``;

const StyledButton = styled(Button)`
  width: 100%;

  ${DESKTOP_BREAKPOINT} {
    width: 200px;
  }
`;

const StyledSearchBar = styled(Input.Search)`
  margin-bottom: 10px;
  width: 100%;

  ${DESKTOP_BREAKPOINT} {
    margin-right: 10px;
    margin-bottom: 0;
    width: 200px;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ef4941;
  margin-bottom: 0;
`;
