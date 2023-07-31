import ReactDOM from "react-dom/client";
import React from "react";

// import "./index.css";
import "./App2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import OTP from "./Comonents/OTP";
import App2 from "./Comonents/OTP";
import OtpInput from "./Comonents/OTP";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <OtpInput />
    {/* </Provider> */}
  </React.StrictMode>
);
