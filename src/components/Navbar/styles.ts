import styled, { css } from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Nav = styled.nav`
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-black);
  padding: 0 2rem;
  height: 6rem;  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  button {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    button {
      display: block;
    }
  }
`;

export const List = styled.ul<Props>`
  display: flex;
  list-style-type: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
    background-color: var(--primary-black);
    position: fixed;
    flex-direction: column;
    align-items: center;
    right: 0;
    height: calc(100% - 6rem);
    top: 6rem;
    transition: transform 0.2s ease-in;
    transform: translateX(${({ isOpen }) => isOpen ? '0' : '100%' });
    
    li {
      display: flex;
      flex-grow: 1;
      align-items: center;
    }
  }
`;

export const Logo = styled.span`
  display: flex;
  color: var(--secondary-light);
  font-size: 2.5rem;
  letter-spacing: 0.2rem;

  p {
    margin-left: 1rem;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: var(--secondary-light);
  font-size: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 300;

  &:hover {
    color: var(--fourth-red);
  }
`;

export const ResponsiveButton = styled.button<Props>`
  background: transparent;
  
  div { 
    width: 2.5rem;
    height: 0.3rem;
    background-color: var(--secondary-light);
    margin: 0.5rem;
    transition: all 0.3 ease;
  }

  ${props => props.isOpen ? css`
    .line-1 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .line-2 {
      opacity: 0;
    }

    .line-3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  ` : ` `}
`;