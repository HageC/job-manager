import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyleWrapper = styled.div.attrs({ className: "dashboard" })`
  .dashboard {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .sidebar {
    width: 300px;
    margin-left: 0;
    padding: 0;
    background-color: #f1f1f1;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .sidebar a {
    display: block;
    padding: 16px;
    text-decoration: none;
  }

  .info-section {
    width: 100%;
    max-width: 1000px;
    margin: 4rem auto 0 auto;
  }

  .nav-bar {
    display: none;
    background-color: #f1f1f1;
    height: 4rem;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .nav-container {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1000px) {
    .nav-bar {
      display: flex;
      align-items: center;
    }
    .sidebar {
      margin-left: -300px;
    }
  }
`;

const Layout = () => {
  return (
    <StyleWrapper>
      <div className="nav-bar">
        <div className="nav-container">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Create
          </a>
        </div>
      </div>
      <div className="dashboard">
        <div className="sidebar">
          <a href="">Home</a>
        </div>

        <div className="info-section">
          <Outlet />
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Layout;
