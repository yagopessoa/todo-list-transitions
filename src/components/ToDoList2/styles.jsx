import styled, { css, createGlobalStyle } from 'styled-components';

export const DURATION = 300;

export const hexToRgb = (hex, opacity = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${opacity})`
    : hex;
};

const WHITE = '#FFFFFF';
const BLACK = '#212121';
const PRIMARY = '#512DA8';
const LIGHT_GREY = '#BDBDBD';
const GREY = '#757575';

export const GlobalStyle = createGlobalStyle`
  button, input {
    font-family: Montserrat;
  }
  body {
    font-family: Sriracha;
    color: ${BLACK};
  }
`;

const getTransitionStyle = ({ state }) => {
  switch (state) {
    case 'entering': {
      return css`
        transform: translateX(-20%);
        opacity: 0;
      `;
    }
    case 'entered': {
      return css`
        opacity: 1;
        transform: translateX(0%);
        transition: all ${DURATION}ms ease-in;
      `;
    }
    case 'exiting': {
      return css`
        opacity: 0;
        transform: translateX(20%);
        transition: all ${DURATION}ms ease-in;
      `;
    }
    case 'exited': {
      return css`
        transform: translateX(0%);
        opacity: 1;
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

  ${getTransitionStyle}
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 72px;
`;

export const Input = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Ex: Play guitar',
}))`
  width: calc(100% - 86px);
  max-width: calc(100% - 32px);
  height: 44px;
  background: ${WHITE};
  border: ${GREY} solid 1px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  color: ${hexToRgb(BLACK, 0.85)};
  padding: 12px;
  margin-left: 16px;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0 5px 5px ${hexToRgb(PRIMARY, 0.45)};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${hexToRgb(BLACK, 0.45)};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${hexToRgb(BLACK, 0.45)};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${hexToRgb(BLACK, 0.45)};
  }
`;

export const Title = styled.div`
  font-size: 36px;
  width: 100%;
  text-align: center;
  padding: 16px 0;
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
  width: 472px;
  padding: 0 16px;
`;

export const Button = styled.button`
  background-color: ${PRIMARY};
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;
  color: ${WHITE};

  ${({ circular }) =>
    circular
      ? css`
          padding: 12px;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        `
      : css`
          padding: 12px 24px;
          border-radius: 4px;
        `}

  svg {
    fill: ${WHITE};
  }

  &:hover {
    background-color: ${hexToRgb(PRIMARY, 0.85)};
  }

  &:active {
    background-color: ${hexToRgb(PRIMARY, 0.65)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px ${hexToRgb(PRIMARY, 0.45)};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${LIGHT_GREY};
      color: ${GREY};
      cursor: not-allowed;

      &:hover {
        background-color: ${LIGHT_GREY};
      }

      &:active {
        background-color: ${LIGHT_GREY};
      }

      &:focus {
        outline: none;
        box-shadow: none;
      }
    `}
`;
