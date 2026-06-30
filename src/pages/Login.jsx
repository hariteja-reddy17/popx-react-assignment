import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="mobile-container">
      <div className="page login-page">
        <h1 className="login-title">
          Signin to your
          <br />
          PopX account
        </h1>

        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <Input
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-btn">
          <Button
            text="Login"
            className={`btn ${isValid ? "primary-btn active" : ""}`}
            onClick={() => {
              if (isValid) navigate("/account");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
