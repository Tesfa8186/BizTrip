import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [loginError, setLoginError] = useState(null); // new state for login errors

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      setLoginError(null); // reset the login error state on successful login
    } catch (e) {
      console.error(e);
      setLoginError("Incorrect password. Please try again."); // set login error message
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="mainStyle">
      <div className="colStyle">
        <div className="cardStyle">
          <h4 className="cardHeaderStyleLogin">Login</h4>
          <div className="cardBodyStyle">
            {Auth.loggedIn() ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="formInputStyle"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="formInputStyle"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="buttonStyle" type="submit">
                  Submit
                </button>
                {loginError && <p>{loginError}</p>} {/* display login error */}
              </form>
            )}
            {error && <div className="errorStyle">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
