import React from 'react';
import styled from '@emotion/styled';
import { DESKTOP_BREAKPOINT } from '../constants';
import { DesktopCard } from '../components';

export default function DesktopView() {
  return (
    <DesktopCardContainer>
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
    </DesktopCardContainer>
  );
}

const DesktopCardContainer = styled.div`
  display: none;

  ${DESKTOP_BREAKPOINT} {
    display: flex;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 20px;
  }
`;
