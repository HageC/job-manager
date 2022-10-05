import React from "react";
import styled from "styled-components";
import notfound from "../assets/not-found.svg";
import { Link } from "react-router-dom";
const StyleWrapper = styled.div.attrs({ className: "error-main" })`
  img {
    margin: 10rem auto 0 auto;
  }
  h1 {
    margin: 2rem auto 0 auto;
    font-size: 6rem;
    font-weight: bold;
  }
  h2 {
    margin: 0 auto;
  }
`;

const NotFound = () => {
  return (
    <StyleWrapper>
      <img src={notfound} alt="Not Found" />
      <h1>Page Not Found</h1>
      <Link to={"/home"}>
        <h2>Return Home</h2>
      </Link>
    </StyleWrapper>
  );
};

export default NotFound;
