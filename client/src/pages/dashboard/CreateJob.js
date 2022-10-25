import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalState } from "../../context/stateContext";
import Alert from "../../components/Notification";
const StyleWrapper = styled.div`
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 100%;
  max-height: 800px;
  border-radius: 4px;

  margin: 5rem 2rem 0 2rem;
  label {
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  input,
  select,
  option {
    width: 100%;
    border-radius: 4px;
    padding: 0.5rem;
    border: 1px solid #cac9c8;
    background-color: #faf9f8;
    display: block;
    margin: 0 auto;
    font-weight: 200;
  }

  .form-input {
    max-width: 400px;
    margin: 2rem auto 2rem auto;
  }
  .profile h1 {
    padding-top: 4rem;
    margin: 0 auto;
    font-size: 2.5rem;
  }
  .submit-btn {
    transition: 0.5s;
    background-color: #00f;
    font-size: 1.3rem;
    color: #ffff;
    display: block;
    margin: 2rem auto 2rem auto;
    padding: 0.5rem;
    width: 100%;
    max-width: 400px;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .submit-btn:hover {
    transition: 0.5s;
    background-color: #0000b2;
    cursor: pointer;
  }

  .submit-btn:disabled {
    cursor: not-allowed;
  }
`;

const CreateJob = () => {
  const { inputError, loading, statusOptions, jobTypeOptions, createJob } =
    useGlobalState();

  const values = {
    jobTitle: "",
    jobType: "full-time",
    jobLocation: "",
    status: "pending",
    companyName: "",
  };
  const [formValues, setFormValues] = useState(values);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { jobTitle, jobType, jobLocation, status, companyName } = formValues;
    if (
      !jobTitle ||
      !jobTitle ||
      !jobLocation ||
      !status ||
      !companyName ||
      !jobType
    ) {
      inputError();
      return;
    }

    createJob({
      jobTitle,
      jobType,
      location: jobLocation,
      status,
      companyName,
    });

    setFormValues(values);
  };
  return (
    <StyleWrapper>
      <div className="profile">
        <form onSubmit={onSubmit}>
          <h1>Create Job</h1>
          <div className="profile-rows">
            <div className="form-input">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                onChange={onChange}
                value={formValues.jobTitle}
                autoComplete="true"
              />
            </div>
            <div className="form-input">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                onChange={onChange}
                value={formValues.companyName}
                autoComplete="true"
              />
            </div>
            <div className="form-input">
              <label htmlFor="jobLocation">Location</label>
              <input
                type="text"
                name="jobLocation"
                onChange={onChange}
                value={formValues.jobLocation}
                autoComplete="true"
              />
            </div>
            <div className="form-input">
              <label htmlFor="jobType">Job Type</label>
              <select
                name="jobType"
                onChange={onChange}
                value={formValues.jobType}
              >
                {jobTypeOptions.map((jobType, index) => {
                  return (
                    <option value={jobType} key={index}>
                      {jobType}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-input">
              <label htmlFor="status">Job Type</label>
              <select
                name="status"
                onChange={onChange}
                value={formValues.status}
              >
                {statusOptions.map((status, index) => {
                  return (
                    <option value={status} key={index}>
                      {status}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              Create Job
            </button>
            <Alert />
          </div>
        </form>
      </div>
    </StyleWrapper>
  );
};

export default CreateJob;
