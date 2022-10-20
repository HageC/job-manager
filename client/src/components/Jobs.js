import React, { useEffect } from "react";
import { useGlobalState } from "../context/stateContext";

const Jobs = () => {
  const { page, loading, jobs, getJobs } = useGlobalState();
  useEffect(() => {}, [page]);
  return <div>Jobs</div>;
};

export default Jobs;
