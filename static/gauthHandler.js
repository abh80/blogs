function onSignIn(googleUser) {
  const user = window.localStorage.getItem("user");
  if (user) window.localStorage.removeItem("user");
  var profile = googleUser.getBasicProfile();
  const structure = {
    name: profile.getName(),
    img: profile.getImageUrl(),
    email: profile.getEmail(),
  };
  window.localStorage.setItem("user", JSON.stringify(structure));
  window.location.reload();
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    window.localStorage.removeItem("user");
    window.location.reload();
  });
}
function onSucess(){
  console.log("Loaded")
}
function renderButton() {
  gapi.signin2.render("my-signin2", {
    scope: "profile email",
    width: 240,
    height: 50,
    longtitle: true,
    theme: "dark",
    onsuccess: onSignIn,
  });
}
