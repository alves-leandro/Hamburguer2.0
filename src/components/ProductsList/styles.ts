import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;

  @media (max-width: 1020px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: fit-content;
  }
`;
