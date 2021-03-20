import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type CartProps = {
  active: 'true' | 'false';
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;

  a {
    img {
      max-width: 23rem;
    }

    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)<CartProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;

  ${({active}) => active === 'true' && css`
    &::after {
      content: '';
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      border: 1px solid var(--dark);
      background: var(--indicator);

      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
    }
  `}

  div {
    text-align: right;
    margin-right: 1rem;

    strong {
      display: block;
      color: var(--white);
    }

    span {
      font-size: 1.2rem;
      color: var(--gray);
    }
  }
`;
