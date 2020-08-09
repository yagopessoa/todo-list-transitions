import styled, { css } from 'styled-components';

export const DURATION = 400;

const getTransitionStyle = ({ state }) => {
  switch (state) {
    case 'entering': {
      return css`
        opacity: 1;
        transform: translateX(0%);
      `;
    }
    case 'entered': {
      return css`
        opacity: 1;
        transform: translateX(0%);
      `;
    }
    case 'exiting': {
      return css`
        opacity: 0;
        transform: translateX(20%);
      `;
    }
    case 'exited': {
      return css`
        opacity: 0;
        transform: translateX(-20%);
      `;
    }
    default:
      return null;
  }
};

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  padding: 16px 0;

  transition: all ${DURATION}ms ease-in-out;
  /* opacity: 0;
  transform: translateX(-100%); */

  ${getTransitionStyle}
`;
export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;

  ${({ justify }) =>
    justify
      ? css`
          justify-content: ${justify};
        `
      : null}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;
