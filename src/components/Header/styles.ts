import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.grey0};
  margin-bottom: 3rem;

  .divHeaderLogo {
    display: flex;
    gap: 1rem;
  }

  .headerTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    height: 80px;
    margin: 0 auto;
    background-color: ${theme.colors.grey0};
    color: ${theme.colors.grey4};
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

  .shopAndSearch {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    height: 50px;
  }

  .icons {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  .divCartIcon {
    display: flex;
    position: relative;
    align-items: center;
  }

  .divPositionNumberCart {
    width: 12px;
    height: 20px;
    position: relative;
    top: -10px;
    right: 5px;
  }

  .countCart {
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 20%;
    color: ${theme.colors.white};
    font-size: ${theme.typography.Body600.size};
    font-weight: ${theme.typography.Body600.weight};
  }

  .headerIconsContainer {
    display: flex;
    flex-direction: column;
  }

  .searchIcon {
    color: ${theme.colors.grey2};
    cursor: pointer;
  }

  .cartIcon {
    color: ${theme.colors.grey2};
    cursor: pointer;
  }

  .logOutIcon {
    color: ${theme.colors.grey2};
    cursor: pointer;
  }

  @media (max-width: 840px) {
    height: 150px;

    .headerTitle {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      gap: 1rem;
      padding: 1rem;
    }

    .shopAndSearch {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  @media (max-width: 460px) {
    .shopAndSearch {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 15px;
    }
  }
`;
