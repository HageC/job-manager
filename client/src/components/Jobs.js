import React, { useEffect } from "react";
import { useGlobalState } from "../context/stateContext";
import styled from "styled-components";
import { Job } from "./";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const StyleWrapper = styled.div`
  margin: 5rem 2rem 0 2rem;

  .job-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  .arrows {
    display: flex;
    width: 200px;
    margin: 2rem auto 0 auto;
  }

  span:hover {
    cursor: pointer;
    color: #00a;
  }
`;

const Jobs = () => {
  const { page, loading, jobs, getJobs, pageCount, changePage } =
    useGlobalState();
  useEffect(() => {
    getJobs();
  }, [page]);

  const increase = () => {
    let nextPage = page + 1;

    if (nextPage > pageCount) {
      nextPage = 1;
    }
    changePage(nextPage);
  };

  const decrease = () => {
    let nextPage = page - 1;
    if (nextPage < 1) {
      nextPage = pageCount;
    }
    changePage(nextPage);
  };
  return (
    <StyleWrapper>
      <div className="job-grid">
        {jobs.map((job) => {
          return <Job {...job} key={job._id} />;
        })}
      </div>

      <div className="arrows">
        <span onClick={decrease}>
          <AiOutlineArrowLeft />
        </span>
        <p>{`${page} of ${pageCount}`}</p>
        <span onClick={increase}>
          <AiOutlineArrowRight />
        </span>
      </div>
    </StyleWrapper>
  );
};

export default Jobs;
