import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/Components/App";
import {Auth0Provider} from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Auth0Provider
  domain="dev-aqqete6x.us.auth0.com"
  clientId="sSsOfSEhL1qpIKDrYwaanR8vDYS2QAUR"
  redirectUri={window.location.origin}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
  ,
  document.getElementById("root")
);
