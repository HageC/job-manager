import React, { useState } from "react";
import styled from "styled-components";
const StyleWrapper = styled.div`
  .signup-form {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-top: 5px solid #00f;
    border-radius: 4px;
    max-width: 400px;
    height: 560px;
    margin: 10rem auto 0 auto;
  }

  .signup-form h1 {
    margin: 2rem auto 0 auto;
    font-size: 2.5rem;
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
    max-width: 80%;
    margin: 2rem auto 2rem auto;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .change {
    border: none;
    background-color: transparent;
    margin: 0 2px;
    padding: 0;
    font-weight: bold;
    color: #00f;
    cursor: pointer;
  }

  .change:hover {
    text-decoration: underline;
  }

  .submit-btn {
    transition: 0.5s;
    background-color: #00f;
    font-size: 1.3rem;
    color: #ffff;
    display: block;
    margin: 2rem auto 2rem auto;
    padding: 0.5rem;
    width: 80%;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .submit-btn:hover {
    transition: 0.5s;
    background-color: #0000b2;
    cursor: pointer;
  }

  p {
    text-align: center;
    margin: 0 auto;
    font-weight: 500;
  }
`;
const SignUp = () => {
  const values = { hasAccount: true, name: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(values);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <StyleWrapper>
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        <h1>Login</h1>
        <div className="form-input">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            autoComplete="true"
            onChange={onChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            autoComplete="true"
            onChange={onChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="true"
            onChange={onChange}
          />
        </div>

        <button className="submit-btn" type="submit">
          Login
        </button>

        <p>
          Already have an account?{" "}
          <button
            className="change"
            onClick={() =>
              setFormValues({
                ...formValues,
                hasAccount: !formValues.hasAccount,
              })
            }
          >
            Login{" "}
          </button>
        </p>
      </form>
    </StyleWrapper>
  );
};

export default SignUp;
