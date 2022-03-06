import styled, { css } from "styled-components";

const CardButtonInactive = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: black;
  font-size: 36px;
`;

const CardButtonActive = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 36px;
`;
export const StyledCardButton = styled.div`
  display: flex;
  width: 96px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  ${({ isActive }) => {
    if (isActive) {
      return CardButtonActive;
    }
    return CardButtonInactive;
  }}
`;
