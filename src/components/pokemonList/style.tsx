import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const ListWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export const ListItem = styled.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
`;

export const ListLink = styled(Link)`
  line-height: 50px;
  padding-right: 20px;
  text-decoration: none;
  color: black;
`;