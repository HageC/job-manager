import React from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalState } from "../context/stateContext";
const StyleWrapper = styled.div`
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 2px;
  padding: 1rem;
  width: 100%;

  .header {
    display: flex;
    align-items: center;
  }

  .header svg {
    cursor: pointer;
    margin-left: auto;
    color: red;
    font-size: 1.4rem;
  }

  .company {
    display: flex;
    align-items: center;
  }

  .company > p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .location {
    margin-left: auto;

    font-size: 1.1rem;
  }

  .location p {
    font-weight: 300;
  }

  .type p {
    text-transform: capitalize;
    font-weight: 300;
  }

  .status p {
    margin-top: 0.5rem;
    text-transform: capitalize;

    font-weight: 600;
  }
`;

const Job = ({ jobTitle, companyName, status, jobType, location, _id }) => {
  const { removeJob } = useGlobalState();
  return (
    <StyleWrapper>
      <div className="job">
        <div className="header">
          <h1>{jobTitle}</h1>
          <AiFillDelete onClick={() => removeJob(_id)} />
        </div>
        <div className="company">
          <p>{companyName}</p>
          <div className="location">
            <p>{location}</p>
          </div>
        </div>

        <div className="type">
          <p>{jobType}</p>
        </div>

        <div className="status">
          <p>Status: {status}</p>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Job;
