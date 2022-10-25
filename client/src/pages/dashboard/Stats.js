import React, { useEffect } from "react";
import { useGlobalState } from "../../context/stateContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleWrapper = styled.div`
  margin: 5rem 1rem 0 1rem;
  .stats {
    display: flex;
    justify-content: center;
  }

  .stats div {
    color: black;
    background-color: #f1f1f1;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 2px;
    padding: 1rem;
    margin: 0 1rem;
    width: 600px;
  }

  h1 {
    margin: 0 auto;
    text-align: center;
  }

  .stat {
    margin-top: 1rem;
    font-weight: 400;
  }
`;

const Stats = () => {
  const { getStats, stats, loading } = useGlobalState();
  useEffect(() => {
    getStats();
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
    </StyleWrapper>
  );
};

export default Stats;
