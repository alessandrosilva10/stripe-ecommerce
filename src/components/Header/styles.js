import styled from "styled-components";

export const NavMenu = styled.div`
  display: flex;
  padding: 1rem;

  a {
    text-decoration: none;
    &::focus,
    &:hover,
    &:visited {
      color: black;
    }
  }

  .logo {
    font-size: 1.5rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    margin-left: auto;

    li {
      display: inline-block;
      margin: 0 1rem;
    }
  }
`;
