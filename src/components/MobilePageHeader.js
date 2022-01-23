import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DESKTOP_BREAKPOINT } from '../constants';
import { ReactComponent as ShipperLogo } from '../assets/shipper-logo.svg';

export default function MobilePageHeader() {
  return (
    <StyledContainer>
      <MobileLogo />
      <Avatar icon={<UserOutlined />} size='large' />
    </StyledContainer>
  );
}

function MobileLogo() {
  return <ShipperLogo width={140} height={50} style={{ marginLeft: '10px' }} />;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 75px;

  ${DESKTOP_BREAKPOINT} {
    display: none;
  }
`;
