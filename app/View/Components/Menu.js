import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faPlusSquare,
  faCogs,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MenuBar = styled.div`
  font-size: 3rem;
  color: white;
  width: 25%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconWrapper = styled.div`
  margin-bottom: 24px;
`;
// const MenuHeader = styled.h1`
//   color: var(--primary-accent);
// `;

export default () => {
  return (
    <MenuBar>
      <IconWrapper>
        <FontAwesomeIcon icon={faChartPie} />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faPlusSquare} />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faCogs} />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faInfoCircle} />
      </IconWrapper>
    </MenuBar>
  );
};
