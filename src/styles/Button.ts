import styled, { css } from "styled-components";
import { theme } from "./theme";

export type buttonProps = {
  buttonSize?: string;
  buttonStyle?: string;
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  transition: 0.4s;
  cursor: pointer;
  font-size: ${theme.typography.Headline.size};
  font-weight: ${theme.typography.Headline.weight};
  line-height: ${theme.typography.Headline.height};

  ${({ buttonSize }: buttonProps) => {
    switch (buttonSize) {
      case "medium":
        return css`
          padding: 0px 16px;
          /* height: 32px; */
        `;
      case "small":
        return css`
          padding: 0 1.75rem;
          height: 32px;
          width: 32px;
        `;
      default:
        return css`
          padding: 0px 22px;
          height: 48px;
          width: 100%;
        `;
    }
  }};

  ${({ buttonStyle }: buttonProps) => {
    switch (buttonStyle) {
      case "primary":
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.primary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case "primary-negative":
        return css`
          background: ${theme.colors.primaryFocus};
          color: ${theme.colors.grey0};
          border: 1px solid ${theme.colors.primaryFocus};
        `;
      case "disabled":
        return css`
          background: ${theme.colors.grey0};
          color: ${theme.colors.grey3};
          border: 1px solid ${theme.colors.grey0};
          &:hover {
            background: ${theme.colors.grey3};
            border: 1px solid ${theme.colors.grey3};
            color: ${theme.colors.grey1};
          }
        `;
      case "secundary":
        return css`
          background: ${theme.colors.grey3};
          color: ${theme.colors.grey0};
          border: 1px solid ${theme.colors.grey3};
          &:hover {
            background: ${theme.colors.grey2};
            border: 1px solid ${theme.colors.grey2};
          }
        `;
      case "card":
        return css`
          background: ${theme.colors.grey3};
          color: ${theme.colors.grey0};
          border: 1px solid ${theme.colors.grey3};
          &:hover {
            background: ${theme.colors.grey2};
            border: 1px solid ${theme.colors.grey2};
          }
          &:focus {
            background: ${theme.colors.primary};
            color: ${theme.colors.grey0};
            border: 1px solid ${theme.colors.primary};
          }
        `;
      default:
        return;
    }
  }};
`;
