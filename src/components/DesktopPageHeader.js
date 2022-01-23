import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DESKTOP_BREAKPOINT } from '../constants';

export default function DesktopPageHeader() {
  return (
    <StyledContainer>
      <span>
        Hello, <span style={{ color: '#ef4941' }}>Shipper User</span>
        <Avatar
          icon={<UserOutlined />}
          size='large'
          style={{ marginLeft: '10px' }}
        />
      </span>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: none;

  ${DESKTOP_BREAKPOINT} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5px;
  }
`;
