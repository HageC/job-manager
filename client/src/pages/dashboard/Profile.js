import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalState } from "../../context/stateContext";
import Alert from "../../components/Notification";
const StyleWrapper = styled.div`
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 100%;
  max-height: 700px;
  border-radius: 4px;
  margin: 5rem 2rem 0 2rem;

  label {
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  input {
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

const Profile = () => {
  const { user, inputError, updateUser, loading } = useGlobalState();
  const values = {
    name: user?.name,
    email: user?.email,
    location: user?.location,
    password: "",
  };
  const [formValues, setFormValues] = useState(values);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, password } = formValues;

    if (!name || !email || !location || !password) {
      inputError();
      return;
    }

    updateUser({ name, email, location, password });
    setFormValues({ ...formValues, password: "" });
  };
  return (
    <StyleWrapper>
      <div className="profile">
        <form onSubmit={onSubmit}>
          <h1>Profile</h1>
          <div className="profile-rows">
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={onChange}
                value={formValues.name}
                autoComplete="true"
              />
            </div>
            <div className="form-input">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                onChange={onChange}
                value={formValues.location}
                autoComplete="true"
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={onChange}
                value={formValues.email}
                autoComplete="true"
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="password"
                required={true}
                onChange={onChange}
                value={formValues.password}
                autoComplete="true"
              />
            </div>

            <button className="submit-btn" type="submit" disabled={loading}>
              Change
            </button>
            <Alert />
          </div>
        </form>
      </div>
    </StyleWrapper>
  );
};

export default Profile;
