import styled from "styled-components/macro";

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: darkblue;

  a {
    line-height: 60px;
    margin-right: 50px;
    color: white;
    text-decoration: none;
  }
`;
