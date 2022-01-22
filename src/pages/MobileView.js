import React from 'react';
import styled from '@emotion/styled';
import { DESKTOP_BREAKPOINT } from '../constants';
import { MobileCard } from '../components';

export default function DesktopView() {
  return (
    <MobileCardContainer>
      <MobileCard />
      <MobileCard />
      <MobileCard />
      <MobileCard />
      <MobileCard />
    </MobileCardContainer>
  );
}

const MobileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100%;

  ${DESKTOP_BREAKPOINT} {
    display: none;
  }
`;
