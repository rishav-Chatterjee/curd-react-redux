import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const AuthorizationHome = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <Button className="btn outline-primary" onClick={loginWithPopup}>
            Login with Popup
          </Button>
          <Button
            className="btn outline-primary mx-5"
            onClick={loginWithRedirect}
          >
            Login with Redirect
          </Button>
        </div>
      ) : (
        <div className="my-3">
          <Button className="btn outline-primary" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
      <div className="text-center">
        <p>User is {isAuthenticated ? "Logged In" : "Not Logged In"}</p>
        <p>{JSON.stringify(user, null, 2)}</p>
      </div>
    </div>
  );
};

export default AuthorizationHome;
