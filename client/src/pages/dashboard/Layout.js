import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useGlobalState } from "../../context/stateContext";
import { IoStatsChartSharp, IoCreateSharp } from "react-icons/io5";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const StyleWrapper = styled.div.attrs({ className: "dashboard" })`
  .dashboard {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  h1 {
    width: auto;
  }
  .sidebar {
    width: 250px;
    margin-left: 0;
    padding: 0;
    background-color: #f1f1f1;
    height: calc(100vh - 5rem);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
  }

  .info-section {
    width: 100%;
    max-width: 1400px;
    margin: 4rem auto 0 auto;
  }

  .nav-bar {
    display: none;
    background-color: #f1f1f1;
    height: 4rem;
    width: 100%;
    max-width: 1000px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .nav-container {
    width: 100%;
    max-width: 1000px;
  }

  .sidebar h1 {
    font-size: 1.5rem;
    margin: 0 auto;
  }

  .sidebar a {
    font-weight: 500;
    transition: 0.5s;
    font-size: 1.5rem;
    padding: 1rem;
    display: flex;
    text-decoration: none;
    align-items: center;
    color: black;
  }

  span {
    margin-left: 1rem;
    color: #00f;
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  .sidebar a:hover {
    transition: 0.5s;
    background-color: #cbcbcb;
  }

  .sidebar button:hover {
    transition: 0.5s;
    background-color: #cbcbcb;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.5rem;
    padding: 1rem;
    display: flex;
    text-decoration: none;
    align-items: center;
    color: black;
    border: none;
  }

  .sidebar button {
    margin-top: auto;
    transition: 0.5s;
  }

  @media only screen and (max-width: 1000px) {
    .nav-container a {
      font-weight: 500;

      font-size: 1.3rem;
      padding: 1rem;
      display: flex;
      text-decoration: none;
      align-items: center;

      color: black;
    }

    button {
      font-weight: 500;
      font-size: 1.3rem;
      padding: 1rem;

      transition: 0;
    }

    span {
      flex-shrink: 0;
    }

    .nav-bar {
      display: block;
    }

    .nav-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sidebar {
      margin-left: -250px;
    }
  }

  @media only screen and (max-width: 840px) {
    .nav-container {
      justify-content: center;
    }
    span {
      font-size: 1rem;
    }
    .nav-container a {
      padding: 0;
      font-size: 1rem;
    }
    .nav-container button {
      font-size: 1rem;
    }
    button {
      padding: 0;
    }
  }

  @media only screen and (max-width: 560px) {
    .nav-container a {
      margin: 0.4rem;
      padding: 0;
    }
    button {
      padding: 0;
      margin: 0.4rem;
    }
    span {
      margin: 0;
      font-size: 0.9rem;
    }
    .nav-container a {
      width: fit-content;
      padding: 0;
      font-size: 0.9rem;
    }
    .nav-container button {
      font-size: 0.9rem;
    }
  }
`;

const Layout = () => {
  const { logout } = useGlobalState();
  return (
    <StyleWrapper>
      <div className="nav-bar">
        <div className="nav-container">
          <Link to={"/"}>
            <span>
              <IoStatsChartSharp />
            </span>
            Stats
          </Link>
          <Link to={"/create"}>
            <span>
              <IoCreateSharp />
            </span>
            Add Jobs
          </Link>
          <Link to={"/jobs"}>
            <span>
              <AiOutlineFileSearch />
            </span>
            View Jobs
          </Link>
          <Link to={"/profile"}>
            <span>
              <BiUser />
            </span>
            Account
          </Link>
          <button onClick={logout}>
            <span>
              <GoSignOut />
            </span>
            Logout
          </button>
        </div>
      </div>
      <div className="dashboard">
        <div className="sidebar">
          <Link to={"/"}>
            <span>
              <IoStatsChartSharp />
            </span>
            Stats
          </Link>
          <Link to={"/create"}>
            <span>
              <IoCreateSharp />
            </span>
            Create Job
          </Link>
          <Link to={"/jobs"}>
            <span>
              <AiOutlineFileSearch />
            </span>
            View Jobs
          </Link>
          <Link to={"/profile"}>
            <span>
              <BiUser />
            </span>
            Account
          </Link>

          <button onClick={logout}>
            <span>
              <GoSignOut />
            </span>
            Logout
          </button>
        </div>

        <div className="info-section">
          <Outlet />
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Layout;
