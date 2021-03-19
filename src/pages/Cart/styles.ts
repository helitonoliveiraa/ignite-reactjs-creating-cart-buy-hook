import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: var(--white);
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
      border-radius: 4px;
      padding: 12px 20px;
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
    padding: 12px;
  }

  tbody td {
    padding: 12px;
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
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: var(--primary);
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid var(--gray-middle);
      border-radius: 4px;
      color: var(--gray);
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

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
    font-size: 28px;
    margin-left: 5px;
    color: var(--primary);
  }
`;
