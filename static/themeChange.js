function changeTheme() {
  let theme2 = null;
  window.localStorage.theme
    ? (theme2 = window.localStorage.getItem("theme"))
    : (theme2 = "light");
  switch (theme2) {
    case "light":
      document.documentElement.style.setProperty("--ifm-card-color", "#D3D3D3");
      break;
    case "dark":
      document.documentElement.style.setProperty("--ifm-card-color", "#303030");
      break;
    default:
      document.documentElement.style.setProperty("--ifm-card-color", "white");
  }
}

window.onload = () => {

  changeTheme();
  document
    .getElementsByClassName("react-toggle")[0]
    .addEventListener("click", () => {
      setTimeout(() => {
        changeTheme();
      }, 100);
    });
  gapi.load("auth2", function () {
    gapi.auth2.init();
  });
  const isMobile = window.screen.width <= 480;
  const elem = document.getElementsByClassName("imageuser")[0];
  if (!elem) return;
  if (isMobile) {
    document.getElementsByClassName("twittertext")[0].style.maxWidth = "400px"
  }
  elem.addEventListener("mouseenter", function (event) {
    event.target.src = "/img/red_cross.png";
  });
  elem.addEventListener("mouseleave", (event) => {
    event.target.src = JSON.parse(window.localStorage.getItem("user")).img;
  });
  elem.addEventListener("click", () => {
    signOut();
  });
};
