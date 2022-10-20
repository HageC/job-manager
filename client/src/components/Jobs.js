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
    justify-content: center;
    width: 200px;
    margin: 2rem auto 0 auto;
  }

  .arrow {
    color: #00f;
    font-size: 1.3rem;
    margin: 0 1rem;
  }

  .arrow:hover {
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
        <div className="arrow" onClick={decrease}>
          <AiOutlineArrowLeft />
        </div>
        <p>{`${page} of ${pageCount}`}</p>
        <div className="arrow" onClick={increase}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Jobs;
