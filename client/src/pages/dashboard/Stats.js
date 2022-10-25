import React, { useEffect } from "react";
import { useGlobalState } from "../../context/stateContext";
const Stats = () => {
  const { getStats } = useGlobalState();
  useEffect(() => {
    getStats();
  }, []);
  return <div>Stats</div>;
};

export default Stats;
