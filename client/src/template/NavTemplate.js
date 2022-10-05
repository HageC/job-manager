import React from "react";
import styled from "styled-components";
import { Logo } from "../components";
const StyleWrapper = styled.div`
  .nav-bar {
    background-color: #00f;
    height: 5rem;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
const NavTemplate = () => {
  return (
    <StyleWrapper>
      <div className="nav-bar">
        <div className="nav-container">
          <Logo />
        </div>
      </div>
    </StyleWrapper>
  );
};

export default NavTemplate;
