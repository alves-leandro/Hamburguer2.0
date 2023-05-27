import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CartShopStyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  /* min-width: 500px; */
  /* background-color: red; */

  /* .shopTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 500px;
    height: 54px;
    background: ${theme.colors.primary};
    border-radius: 5px 5px 0px 0px;
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
  } */

  .shopCartUl {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    max-height: 50vh;
    overflow-y: auto;
    border: 1px solid ${theme.colors.grey0};
    background: ${theme.colors.white};
  }

  .shopCartEmpty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 158px;
    background: ${theme.colors.white};
    margin: 0 auto;
  }

  .shopTitleEmpty {
    color: ${theme.colors.grey4};
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
  }

  .shopTextEmpty {
    color: ${theme.colors.grey3};
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
  }

  .liShopCart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    gap: 0.5rem;
    background: ${theme.colors.white};
    box-shadow: 0 5px ${theme.colors.grey1};
  }

  .liShopCart > img {
    height: 70px;
    width: 70px;
    background: ${theme.colors.grey1};
    border-radius: 5px;
  }

  .liShopCartDiv2 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .liShopAboutDiv {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .shopProductName {
    color: ${theme.colors.grey4};
    font-size: ${theme.typography.Heading3.size};
    font-weight: ${theme.typography.Heading3.weight};
    line-height: ${theme.typography.Heading3.height};
  }

  .shopProductCategory {
    color: ${theme.colors.grey3};
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
    
  }

  .liShopButtonDiv {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .liShopButtonPosition {
    display: flex;
    gap: 0.5rem;
  }

  .shopCartTotalDiv {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 4rem;
    width: 100%;
    max-width: 500px;
    /* height: 152px; */
    margin: 0 auto;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey0};
    border-radius: 0 0 5px 5px;
    border-top: 3px solid ${theme.colors.grey1};
  }

  .textTotal {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }

  .pTotal {
    color: ${theme.colors.grey4};
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
  }

  .pTotalPrice {
    color: ${theme.colors.grey3};
    font-size: ${theme.typography.Body.size};
    font-weight: ${theme.typography.Body.weight};
    line-height: ${theme.typography.Body.height};
  }
`;
