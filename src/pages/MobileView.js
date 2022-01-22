import React from 'react';
import styled from '@emotion/styled';
import { DESKTOP_BREAKPOINT } from '../constants';
import { MobileCard } from '../components';

export default function DesktopView({ isDriversLoading, drivers }) {
  return (
    <MobileCardContainer>
      {!isDriversLoading &&
        drivers.length > 0 &&
        drivers.map((driver) => {
          const { id, name, phone } = driver;
          return <MobileCard key={id} id={id} name={name} phone={phone} />;
        })}
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
