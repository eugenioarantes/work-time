import { convertPixelToRem } from "css-blocks-styled-components";
import styled from "styled-components";
import { QUERIES } from "../../utils/appConstants";

export const Container = styled.header`
  background: #161616;

  h1 {
    position: absolute;
    left: 80px;
    top: 35px;
    color: #cdcdcd;
    transition: color 0.5s;
    cursor: default;

    :hover {
      color: #fff;
    }
  }

  ${QUERIES.LAPTOPS} {
    height: ${convertPixelToRem(200)};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #fff;
    background: #00000078;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;