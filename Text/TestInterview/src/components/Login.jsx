import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate;

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://uat.elabpro.in/api/v1/Users/login",
        { usename, password }
      );
      //   const token = response.data.token;
      history.push("/dashboard");
    } catch (error) {
      alert("invalid credentials");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter the username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter the password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
