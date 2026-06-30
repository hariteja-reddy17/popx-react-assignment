import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <div className="mobile-container">
      <div className="page register-page">
        <h1 className="register-title">
          Create your
          <br />
          PopX account
        </h1>

        <Input
          label="Full Name*"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <Input
          label="Phone number*"
          placeholder="Marry Doe"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <Input
          label="Email address*"
          placeholder="Marry Doe"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <Input
          label="Password*"
          type="password"
          placeholder="Marry Doe"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <Input
          label="Company name"
          placeholder="Marry Doe"
          value={form.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <p className="register-radio-title">Are you an Agency?*</p>

        <div className="register-radio">
          <label>
            <input
              type="radio"
              checked={form.agency === "Yes"}
              onChange={() => handleChange("agency", "Yes")}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              checked={form.agency === "No"}
              onChange={() => handleChange("agency", "No")}
            />
            No
          </label>
        </div>

        <div className="register-button">
          <Button
            text="Create Account"
            className="btn primary-btn"
            onClick={() => navigate("/account")}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
