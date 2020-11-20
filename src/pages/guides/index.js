import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function Guide() {
  const guides = require("./guides.json")
  React.useEffect(function mount() {
    function changeTheme() {
      let theme2 = null;
      window.localStorage.theme
        ? (theme2 = window.localStorage.getItem("theme"))
        : (theme2 = "light");
      switch (theme2) {
        case "light":
          document.documentElement.style.setProperty(
            "--ifm-card-color",
            "#e3d8d8"
          );
          break;
        case "dark":
          document.documentElement.style.setProperty(
            "--ifm-card-color",
            "#303030"
          );
          break;
        default:
          document.documentElement.style.setProperty(
            "--ifm-card-color",
            "white"
          );
      }
    }
    document
      .getElementsByClassName("react-toggle")[0]
      .addEventListener("click", () => {
        setTimeout(() => {
          changeTheme();
        }, 100);
      });
  });

  return (
    <Layout
      title={`Stars Tracker Guides`}
      description="Guides to boost your experience"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Stars Tracker Guide"}</h1>
          <p className="hero__subtitle">{"Guides to boost your experience"}</p>
        </div>
      </header>
      <div className="mainSection">
        <div className="header---e">
          <span className="header--b">
            <b>Guides</b>
          </span>
        </div>
        <div className="cards">
          {guides.length
            ? guides.map((e) => {
                return (
                  <div className="guide---cards">
                    <span className="guide---c name">{e.name}</span>
                    <div>
                      <span className="guide---c desc">{e.desc}</span>
                    </div>
                    <div className="guide---c image">
                      <img
                        src={useBaseUrl(e.img)}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className={styles.buttons}>
                      <Link
                        className={clsx(
                          "button button--outline button--secondary button--lg",
                          styles.getStarted
                        )}
                        to={useBaseUrl("guides" + e.url)}
                      >
                        GO
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </Layout>
  );
}

export default Guide;