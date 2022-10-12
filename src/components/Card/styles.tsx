import { convertPixelToRem } from "css-blocks-styled-components";
import styled, { css } from "styled-components";
import { QUERIES } from "../../utils/appConstants";

interface TotalProps {
  total?: number;
}

export const Container = styled.div<TotalProps>`
    background: #0d0d0e9e;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #FFF;
    width: 360px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

      ${QUERIES.LAPTOPS} {
        font-size: ${convertPixelToRem(25)};
       }
    }

    &.highlight-background {
      color: #FFF;
      
      ${props => (props.total !== undefined && props.total > 0) && css`
      background: var(--green) 
      `}

      ${props => (props.total !== undefined && props.total < 0) && css`
      background: #c53030;
      `}

      ${props => (props.total !== undefined && props.total === 0) && css`
      background: #b9b9b5;
      `}
    }

    ${QUERIES.LAPTOPS} {
      width: ${convertPixelToRem(270)};
      padding: 0.7rem 1.8rem;
    }
`;