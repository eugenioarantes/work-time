import styled, { css } from "styled-components";

interface TotalProps {
  total?: number;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const Card = styled.div<TotalProps>`
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

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