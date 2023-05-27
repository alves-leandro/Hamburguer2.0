import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputBox = styled.input`
  /* position: absolute;
  top: 10px;
  left: 25px; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 365px;
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 0px 10px 0px 15px;
  border: 2px solid ${theme.colors.grey1};
  border-radius: 8px;
  color: ${theme.colors.grey1};

  &:focus {
    border: 2px solid ${theme.colors.grey4};
    border-radius: 8px;
    color: ${theme.colors.grey3};
  }

  @media (max-width: 840px) {
    width: 100%;
  }
`;
