import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Perform validation and login logic here
    if (
      (formData.email === "admin@gmail.com",
      "eramitgjms@gmail.com" && formData.password === "admin123@")
    ) {
      dispatch(login());
      history("/Dashboard"); // Redirect to dashboard after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="login-input"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        className="login-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
