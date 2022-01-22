import React from 'react';
import { Avatar, Card } from 'antd';
import { EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export default function DesktopCard({ id, name, phone }) {
  return (
    <StyledCard
      size='small'
      title={
        <>
          <span style={{ color: '#adadad' }}>Driver ID</span>{' '}
          <span style={{ color: '#ef4941' }}>{id}</span>
        </>
      }
      extra={<EllipsisOutlined />}
    >
      <ContentWrapper>
        <Avatar
          size={90}
          icon={<UserOutlined />}
          style={{ marginRight: '25px' }}
        />
        <UserBarBody>
          <Details>
            <Header>Nama Driver</Header>
            <Content>{name}</Content>
          </Details>
          <Details>
            <Header>Telepon</Header>
            <Content>{phone}</Content>
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
  padding: 15px;
  display: flex;
  align-items: center;
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
  width: 100%;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
