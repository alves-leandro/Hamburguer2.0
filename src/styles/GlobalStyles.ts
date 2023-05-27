import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  }

  body,html{
    width: 100vw;
    height: 100vh;
    min-height: 100%;
  }

  .App {
    height: fit-content;
    min-height: 100vh;
    background: ${theme.colors.white};
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong, p, span {
    color: ${theme.colors.grey4};
  } 

   /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.grey3};
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey3};
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }

  .mainDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    min-height: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1020px) {
    .App {
      height: 100%;
      min-height: 100vh;
    }

    .mainDiv {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      min-width: 95%;
      min-height: fit-content;
    }

    .mainDivLogin {
      display: flex;
      flex-direction: column-reverse;
      gap: 2rem;
      min-width: 95%;
      min-height: fit-content;

      .dotsContainer {
        display: none;
      }
    }

    .MainDivRegister {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      min-width: 95%;
      min-height: fit-content;

      .messageLoginContainer {
        display: none;
      }

      .dotsContainer {
        display: none;
      }
    }

    .leftSection {
      height: max-content;
      min-width: 100%;
    }

    .divInputSearch {
      width: 100%;
    }

  }
 
  .divInputSearch {
      width: 100%;
    }

  .buttonRemoveShopCart {
    width: 100%;
    background: ${theme.colors.grey1};
    border: 2px solid ${theme.colors.grey1};
    color: ${theme.colors.white};
  }
  
  .buttonRemoveShopCart:hover {
    background: ${theme.colors.grey3};
    border: 2px solid ${theme.colors.grey3};
  }

  .themeButton {
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  .divHiddenSearch {
    min-width: max-content;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
    border-radius: 5px;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    .divHiddenSearch {
      flex-direction: column;
    }
  }

  .divHiddenSearch > p {
    color: ${theme.colors.grey4};
    font-weight: ${theme.typography.Heading2.weight};
    font-size: ${theme.typography.Heading2.size};
  }

  .divHiddenSearch > span{
    color: ${theme.colors.grey1};
    font-weight: ${theme.typography.Heading2.weight};
    font-size: ${theme.typography.Heading2.size};
  }

  .modalOverlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modalContent {
    width: 500px;
    min-width: 300px;
    border-radius: 4px;
    background-color: ${theme.colors.grey3};
    color: ${theme.colors.grey1};
    border-radius: 4px;
  }

  .ButtonCloseModal {
    color: ${theme.colors.grey1};
    font-size: ${theme.typography.Headline.size};
    font-weight: ${theme.typography.Headline.weight};
    line-height: ${theme.typography.Headline.height};
  }
  
  .modalTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    height: 54px;
    background: ${theme.colors.primary};
    border-radius: 5px 5px 0px 0px;
    
  }
  .FormTitle {
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
  }

  .ButtonCloseModal {
    border: none;
    color: ${theme.colors.grey0};
    background: ${theme.colors.primary};
    cursor: pointer;
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
  }
`;
