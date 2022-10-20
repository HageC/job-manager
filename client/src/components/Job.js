import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 2px;
  padding: 1rem;
  width: 100%;
`;

const Job = ({ jobTitle, companyName, status, jobType, location }) => {
  return (
    <StyleWrapper>
      <div className="job">
        <h1>{jobTitle}</h1>
        <p>{companyName}</p>
        <p>{status}</p>
        <p>{jobType}</p>
        <p>{location}</p>
      </div>
    </StyleWrapper>
  );
};

export default Job;
