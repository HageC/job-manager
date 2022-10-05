import React, { useState } from "react";

const SignUp = () => {
  const values = { name: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(values);

  return (
    <>
      <form>
        <h1>Login</h1>

        <input type="text" />
      </form>
    </>
  );
};

export default SignUp;
