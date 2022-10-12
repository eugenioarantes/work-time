import { convertPixelToRem } from "css-blocks-styled-components";
import styled, { css } from "styled-components";
import { ReactComponent as ClockImage } from '../../assets/clock.svg';

interface TotalProps {
  total?: number;
}

export const Container = styled.div`
  display: flex;
  margin-top: -10rem;
  justify-content: center;
  gap: ${convertPixelToRem(100)};
`;

export const Card = styled.div<TotalProps>`
    background: #0000007d;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #FFF;

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
`;


export const Clock = styled(ClockImage)`
  position: absolute;
  width: 700px;
  height: 700px;

  bottom: 0;
  right: 0px;

  opacity: 7%;
  /* transform: rotate(335deg); */
`;