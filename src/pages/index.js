import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Add your own Blog!",
    description: (
      <>
        With the help of docusaurus edit the source of this site and add your
        own blogs
      </>
    ),
  },
  {
    title: "Easy Reading!",
    description: <>Enjoy the most easy guides throughout this site</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
function Contributors() {
  return <div id="Contributors"></div>;
}
function TwitterSection() {
  return (
    <div className="twitterCard">
      <a href="https://twitter.com" target="_blank">
        <img
          className="twitterlogo"
          src="/img/twitter-logo.png"
          alt="twitter-logo"
          href="https://twitter.com"
        />
      </a>
      <a
        className="tweeterdetails"
        href="https://twitter.com/realdonaldtrump"
        target="_blank"
      >
        <img
          className="twitterImg"
          src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg"
          alt="tweeter"
        />
        <p>@realdonaldtrump</p>
      </a>
      <div className="twittertext" id="twittertext">
        Please Wait Loading Tweet
      </div>
      <span className="timesection" id="timesection">
        At {new Date().toLocaleString()}
      </span>
    </div>
  );
}
function Home() {
  React.useEffect(function mount() {
    fetch("https://api.github.com/repos/abh80/blogs/contributors")
      .then((x) => x.json())
      .then((x) => {
        if (document.getElementById("Contributors").innerHTML) return;
        for (let i = 0; i < x.length; i++) {
          document.getElementById("Contributors").innerHTML += `<a href=${
            "https://github.com/" + x[i].login
          } target = "_blank">
              <img src=${x[i].avatar_url} alt="avatar" />
            </a>`;
        }
      });
    fetch("https://safeazureservicepack.techixspotifyco.repl.co/tweet")
      .then((res) => res.json())
      .then((res) => {
        if (res.text.includes("@")) {
          const m = res.text.match(/@(\w{2,32})/g);
          res.text = res.text.replace(
            m,
            `<a href = "https://twitter.com/${m}" target = "_blank"> ${m} </a>`
          );
        }
        document.getElementById("twittertext").innerHTML = res.text;
        document.getElementById("timesection").textContent =
          "At " + res.created_at.replace("+0000 2020", "");
      });
  });
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Stars Tracker blog"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("blog/")}
            >
              Start Reading !
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
                <TwitterSection />
              </div>
            </div>
          </section>
        )}
        <div className="Contributors">
          <div className="Contributors--h">
            <u>Contributors</u>
          </div>
          <Contributors />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
