import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-black);
  padding: 0 2rem;
  height: 6rem;  

  button {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    button {
      display: block;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
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