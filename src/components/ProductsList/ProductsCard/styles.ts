import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Card = styled.li`
  .card {
    width: 300px;
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.grey1};
    border-radius: 5px;

    &:focus-within {
      border: 2px solid ${theme.colors.primary};
      .divAboutCardProduct {
        > button {
          background: ${theme.colors.primary};
          color: ${theme.colors.grey0};
          border: 1.2182px solid ${theme.colors.primary};
        }
      }
    }
  }

  .productCardImage {
    display: flex;
    justify-content: center;
    width: 296px;
    height: 150px;
    background-color: ${theme.colors.grey0};
  }

  img {
    width: 50%;
  }

  .divAboutCardProduct {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 2rem;
    gap: 1rem;
  }

  .productCardName {
    color: ${theme.colors.grey4};
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
  }
  .productCardCategory {
    color: ${theme.colors.grey3};
    font-size: ${theme.typography.Caption.size};
    font-weight: ${theme.typography.Caption.weight};
    line-height: ${theme.typography.Caption.height};
  }
  .productCardPrice {
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
    color: ${theme.colors.primary};
  }
`;
