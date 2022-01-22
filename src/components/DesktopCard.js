import React from 'react';
import { Avatar, Card } from 'antd';
import { EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export default function DesktopCard() {
  return (
    <StyledCard
      size='small'
      title={
        <>
          <span style={{ color: '#adadad' }}>Driver ID</span>{' '}
          <span style={{ color: '#ef4941' }}>12345</span>
        </>
      }
      extra={<EllipsisOutlined />}
    >
      <ContentWrapper>
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ marginBottom: '20px' }}
        />
        <UserBarBody>
          <Details>
            <Header>Nama Driver</Header>
            <Content>Dodi Winata</Content>
          </Details>
          <Details>
            <Header>Telepon</Header>
            <Content>+62 894 923 832</Content>
          </Details>
          <Details>
            <Header>Email</Header>
            <Content>dodi@gmail.com</Content>
          </Details>
          <Details>
            <Header>Tanggal lahir</Header>
            <Content>05-10-1989</Content>
          </Details>
        </UserBarBody>
      </ContentWrapper>
    </StyledCard>
  );
}

const UserBarBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

const Details = styled.div`
  margin-bottom: 5px;
  align: left;

  &:last-child {
    margin-bottom: -20px;
  }
`;

const Content = styled.p`
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Header = styled.p`
  margin-bottom: 2px;
  font-weight: 500;
  color: #adadad;
`;

const StyledCard = styled(Card)`
  min-width: 300px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
