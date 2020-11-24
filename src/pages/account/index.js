import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

function SignOut1(setShowSignOut, isMobile) {
  return (
    <div className="signout--component">
      <div className="signout--bar"></div>
      <div
        className="centered-content"
        style={{
          backgroundColor: "#242526",
          opacity: 1,
          height: "150px",
          width: "320px",
          zIndex: 3,
          position: "absolute",
          top: "180px",
          marginLeft: isMobile?"50px":"580px",
        }}
      >
        <h6
          className="make-some-space"
          style={{ marginTop: "20px", color: "white" }}
        >
          You Are About to sign Out
        </h6>
        <div style={{ display: "inline-block" }}>
          <button
            className="sign-out--button-g make-some-space"
            style={{
              width: "100px",
              height: "50px",
              border: "none",
              cursor: "pointer",
              borderRadius: "25px",
              marginTop: "20px",
              color: "white",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            <div
              style={{ top: "0px", position: "relative" }}
              id="signOut--button"
              onClick={signOut}
            >
              Sign Out
            </div>
          </button>
          <button
            className="sign-out--button-w make-some-space"
            style={{
              width: "100px",
              height: "50px",
              border: "none",
              cursor: "pointer",
              borderRadius: "25px",
              marginTop: "20px",
              color: "black",
              textAlign: "center",
            }}
          >
            <div
              style={{ top: "0px", position: "relative" }}
              id="signOut--button"
              onClick={() => setShowSignOut(false)}
            >
              Cancel
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
function UserExists(avatarURL, name, email, setSignOut) {
  return (
    <div className="user--details-2009293">
      <div
        style={{
          marginTop: "20px",
          fontSize: "1.3em",
          marginLeft: "0px",
          marginBottom: "20px",
        }}
      >
        <span>
          Welcome, <b>{name} </b>!
        </span>
      </div>
      <img
        src={avatarURL}
        alt="google--user-image"
        style={{ borderRadius: "100%" }}
      />
      <div className="user-name-2009339" style={{ marginTop: "20px" }}>
        Email : {email}
      </div>
      <div
        className="sign-out--button-g"
        style={{
          width: "100px",
          height: "50px",
          border: "none",
          cursor: "pointer",
          borderRadius: "25px",
          marginTop: "20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{ top: "10px", position: "relative" }}
          onClick={() => setSignOut(true)}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
}
function notSignIn() {
  return (
    <div className="signin-req-component make-some-space">
      <h3>
        Hello, <b>User!</b>
      </h3>
      <span>Looks like you arent signed in</span>
      <div style={{ marginTop: "30px" }}>
        <div style={{ fontSize: "1.3em" }}>Sign In to Continue</div>
      </div>
      <div id="my-signin2"></div>
    </div>
  );
}
function Account() {
  const [user, setUser] = React.useState(null);
  const [showSignOut, setSignOutValue] = React.useState(null);
  const [mobile, setMobile] = React.useState(null);
  React.useEffect(function mount() {
    const isMobile = window.screen.width <= 480;
    isMobile ? setMobile(isMobile) : null;
    const nuser = window.localStorage.getItem("user");
    if (!nuser || user) return;
    setUser(JSON.parse(nuser));
  });
  return (
    <Layout>
      <div className="accountPage">
        <div className="make-some-space">
          <b>
            <h1>Account</h1>
          </b>
          {user
            ? UserExists(user.img, user.name, user.email, setSignOutValue)
            : notSignIn()}
        </div>
        {showSignOut ? SignOut1(setSignOutValue, mobile) : null}
      </div>
    </Layout>
  );
}
export default Account;
