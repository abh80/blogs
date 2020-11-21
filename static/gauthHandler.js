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
  window.location.reload()
}
