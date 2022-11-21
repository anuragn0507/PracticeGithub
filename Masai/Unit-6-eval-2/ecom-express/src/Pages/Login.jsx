import React, { useState } from "react";
import { useContext } from "react";
import { authContext } from "../Context/AuthContext";

function Login() {
  const intialState = { email: "", password: "" };
  const [formData, setFormData] = useState(intialState);
  const { handleAuth } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleInput = (e) => {
    // console.log("e.target value kya hai", e.target.value);
    const { name, value } = e.target;
    console.log("what is name", name);
    console.log("what is value", value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    setErrors(false);
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        handleAuth(data.token);
        setFormData(intialState);
        setLoading(false);
        setErrors(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setErrors(true);
  };

  return (
    <div>
      {loading && (
        <div
          style={{ margin: "10px", padding: "5px", backgroundColor: "teal" }}
        >
          Loading
        </div>
      )}
      {errors && (
        <div style={{ margin: "10px", padding: "5px", backgroundColor: "red" }}>
          User not found
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="email"
          value={formData.input}
          onInput={handleInput}
        />
        <input
          required
          type="text"
          name="password"
          value={formData.password}
          onInput={handleInput}
        />
        <input
          disabled={loading}
          type="submit"
          value={loading ? "Loading" : "Login"}
        />
      </form>
    </div>
  );
}

export default Login;
