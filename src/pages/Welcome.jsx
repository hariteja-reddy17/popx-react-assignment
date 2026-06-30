import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="page welcome-page">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to PopX</h1>

          <p className="welcome-text">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <div className="welcome-btn">
            <Button
              text="Create Account"
              className="btn primary-btn"
              onClick={() => navigate("/register")}
            />
          </div>

          <Button
            text="Already Registered? Login"
            className="btn secondary-btn"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
