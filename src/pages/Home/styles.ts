import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 0.4rem;
    padding: 2rem;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 1.6rem;
      line-height: 2rem;
      color: var(--gray-dark);
      margin-top: 0.5rem;
    }

    > span {
      font-size: 2rem;
      font-weight: bold;
      margin: 0.5rem 0 2rem;
      color: var(--primary);
    }

    button {
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
      border-radius: 0.4rem;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#a4916d')};
        color: var(--white);

        svg {
          color: var(--white);
        }
      }

      div {
        display: flex;
        align-items: center;
        padding: 1.2rem;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 0.5rem;
          color: var(--primary);
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
