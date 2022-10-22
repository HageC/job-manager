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
        <p>{companyName}</p>
        <p>{status}</p>
        <p>{jobType}</p>
        <p>{location}</p>
      </div>
    </StyleWrapper>
  );
};

export default Job;
