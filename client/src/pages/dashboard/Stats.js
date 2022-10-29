import React, { useEffect } from "react";
import { useGlobalState } from "../../context/stateContext";
import styled from "styled-components";
import { ChartStats } from "../../components";
import dataSvg from "../../assets/data.svg";
const StyleWrapper = styled.div`
  margin: 5rem auto 0 auto;
  width: 90%;
  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .stats div {
    width: 100%;
    color: black;
    background-color: #f1f1f1;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 2px;
    padding: 1rem;
    margin: 0 1rem;
    max-width: 600px;
  }

  h1 {
    margin: 0 auto;
    text-align: center;
  }

  .stat {
    margin-top: 1rem;
    font-weight: 400;
  }

  .data-img {
    margin: 7rem auto 0 auto;
    width: 700px;
    height: auto;
  }

  @media only screen and (max-width: 750px) {
    .stats {
      flex-direction: column;
    }

    .stats div {
      margin: 0 auto 2rem auto;
    }
  }
`;

const Stats = () => {
  const { getStats, stats, loading, monthStats: data } = useGlobalState();
  useEffect(() => {
    getStats();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <StyleWrapper>
      <div className="stats">
        <div>
          <h1>Pending Applications</h1>
          <h1 className="stat">{stats.pending}</h1>
        </div>

        <div>
          <h1>Interviews Scheduled</h1>
          <h1 className="stat">{stats.interview}</h1>
        </div>
        <div>
          <h1>Declined Applications</h1>
          <h1 className="stat">{stats.declined}</h1>
        </div>
      </div>
      {data.length > 0 ? (
        <ChartStats data={data} />
      ) : (
        <img className="data-img" src={dataSvg} alt="not found" />
      )}
    </StyleWrapper>
  );
};

export default Stats;
