import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainjob from "../assets/main-job.svg";
const StyleWrapper = styled.div`
  .main-section {
    margin: 8rem auto 0 auto;
    max-width: 1200px;
  }

  .main-section h1 {
    font-weight: bold;
    font-size: 4rem;
    margin: 0 auto;
  }

  .main-section img {
    width: 600px;
    height: auto;
    margin: 4rem auto 4rem auto;
  }

  .main-section button {
    transition: 0.5s;
    background-color: #00f;
    font-size: 1.3rem;
    color: #ffff;
    display: block;
    margin: 2rem auto 0 auto;
    padding: 0.6rem;
    width: 200px;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .main-section button:hover {
    transition: 0.5s;
    background-color: #0000b2;
    cursor: pointer;
  }

  span {
    color: #00f;
  }
`;

const Home = () => {
  return (
    <StyleWrapper>
      <div className="main-section">
        <h1>
          Job <span>Manager</span> App
        </h1>
        <img src={mainjob} alt="" />
        <Link to={"/signup"}>
          <button>Login or Register</button>
        </Link>
      </div>
    </StyleWrapper>
  );
};

export default Home;
