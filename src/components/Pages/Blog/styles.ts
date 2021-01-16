import styled, { css } from 'styled-components';

export const Button = styled.button<{ active: boolean }>`
  align-self: center;
  width: fit-content;

  border: none;
  background: none;
  cursor: pointer;

  margin: 0 0.5rem 0 0.5rem;

  font-size: 1.5rem;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI',
    'Helvetica Neue', 'Lucida Grande', sans-serif;
  font-display: swap;
  color: ${({ theme }) => theme.colors.black};

  ${(props) =>
    props.active &&
    css`
      background-color: ${({ theme }) => theme.colors.gradient.backgroundColor};
      background-image: ${({ theme }) => theme.colors.gradient.backgroundImage};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
`;
