import styled from "styled-components";
import { convertPixelToRem } from "css-blocks-styled-components";
import { IMaskInput } from 'react-imask';
import { QUERIES } from "../../utils/appConstants";

export const Container = styled.form`
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #000;
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: background-color 0.5s;

    &:hover {
      background: #080808;
    }

    ${QUERIES.LAPTOPS} {
      height: ${convertPixelToRem(40)};
      font-size: ${convertPixelToRem(15)};
    }
  }

  ${QUERIES.LAPTOPS} {
    height: ${convertPixelToRem(470)};
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  filter: drop-shadow(2px 4px 6px black);

  ${QUERIES.LAPTOPS} {
    font-size: ${convertPixelToRem(20)};
    margin-bottom: 1rem;
  }
`;

export const Label = styled.label`
  color: #ffffffc4;
`;

export const Input = styled(IMaskInput)`
  margin-top: ${convertPixelToRem(3)};
  margin-bottom: ${convertPixelToRem(8)};

  width: 100%;
  padding: 0.5rem;
  height: 4rem;
  border-radius: 10px;

  border: 0;
  background: #ffffff08;
  color: #ffffff;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: #ffffff3b;
  }

  & + input {
    margin-top: 1rem;
  }

  ${QUERIES.LAPTOPS} {
    height: ${convertPixelToRem(40)};
  }

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #1c1c1c inset !important;
    -webkit-text-fill-color: white !important;
  }
`;
