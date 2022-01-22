import React from 'react';
import styled from '@emotion/styled';

import { DESKTOP_BREAKPOINT } from '../constants';
import { DesktopCard } from '../components';

export default function DesktopView({ isDriversLoading, drivers }) {
  return (
    <DesktopCardContainer>
      {!isDriversLoading &&
        drivers.length > 0 &&
        drivers.map((driver) => {
          const { id, name, email, dob, phone } = driver;
          return (
            <DesktopCard
              key={id}
              id={id}
              name={name}
              email={email}
              dob={dob}
              phone={phone}
            />
          );
        })}
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
