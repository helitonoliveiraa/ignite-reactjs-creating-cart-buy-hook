import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 3rem;
  background: var(--white);
  border-radius: 0.4rem;

  footer {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
      border-radius: 0.4rem;
      padding: 1.2rem 2rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#a4916d')};
        color: var(--white);
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: var(--gray);
    text-align: left;
    padding: 1.2rem;
  }

  tbody td {
    padding: 1.2rem;
    border-bottom: 1px solid var(--gray-light);
  }

  img {
    height: 100px;
  }

  strong {
    color: var(--gray-dark);
    display: block;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid var(--gray-middle);
      border-radius: 0.4rem;
      color: var(--gray);
      padding: 0.6rem;
      width: 5rem;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 0.6rem;

    svg {
      color: var(--primary);
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#a4916d')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#a4916d')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: var(--gray);
    font-weight: bold;
  }

  strong {
    font-size: 2.8rem;
    margin-left: 0.5rem;
    color: var(--primary);
  }
`;
