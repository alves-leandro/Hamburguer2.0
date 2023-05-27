import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RegisterMainDivStyled = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 53px;

  .leftSections {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .logoLeft {
    color: ${theme.colors.grey4};
    font-size: ${theme.typography.Heading1.size};
    font-weight: ${theme.typography.Heading1.weight};
    line-height: ${theme.typography.Heading1.height};
  }

  .logoRight {
    color: ${theme.colors.primaryFocus};
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
  }

  .messageLoginContainer {
    width: 377px;
    height: 95px;
    display: flex;
    align-items: center;
    padding: 13px;
    gap: 19px;
    border: 1px solid ${theme.colors.grey1};
    border-radius: 5px;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  }

  .shoppingBarContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    height: 60px;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
  }

  .bagIMG {
    width: 22px;
    height: 22px;
    color: ${theme.colors.colorSucess};
  }

  .textLoginMessage {
    text-justify: auto;
    color: ${theme.colors.grey3};
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
  }

  .dotsContainer {
    width: 181.16px;
    height: 79px;
  }
`;
