import styled from "styled-components";
import { convertPixelToRem } from "css-blocks-styled-components";
import { IMaskInput } from 'react-imask';

export const Container = styled.form`
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #3c619c80;
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  color: #000;
`;

export const Input = styled(IMaskInput)`
  margin-top: ${convertPixelToRem(3)};
  margin-bottom: ${convertPixelToRem(8)};

  width: 100%;
  padding: 0.5rem;
  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`;
