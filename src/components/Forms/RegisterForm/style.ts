import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormRegisterStyled = styled.form`
  width: 100%;
  min-width: 380px;
  padding: 42px 20px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey0};

  h1 {
    display: flex;
    justify-content: start;
    padding: 20px 0px;
    color: ${theme.colors.grey4};
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
    margin-bottom: 12px;
  }

  span {
    display: flex;
    justify-content: start;
    font-size: ${theme.typography.Caption.size};
    font-weight: ${theme.typography.Caption.weight};
    color: ${theme.colors.colorNegative};
    min-height: 17px;
    margin: 0px 0px 20px 0px;
  }

  a {
    color: ${theme.colors.grey3};
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
  }

  .headerRegisterForm {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
