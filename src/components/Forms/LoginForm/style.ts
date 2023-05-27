import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormLoginStyled = styled.form`
  width: 100%;
  max-width: 370px;
  padding: 42px 22px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey0};

  .passwordDiv {
    position: relative;
  }

  .iconEye {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 15px;
    color: ${theme.colors.grey0};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: 4px;
  }

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

  p {
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 36px;
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
    color: ${theme.colors.grey2};
  }

  span {
    display: flex;
    justify-content: center;
    font-size: ${theme.typography.Caption.size};
    font-weight: ${theme.typography.Caption.weight};
    color: ${theme.colors.colorNegative};
    min-height: 17px;
    margin: 0px 0px 20px 0px;
  }
`;
