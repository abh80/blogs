/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
const useThemeConfig = () => {
  return useDocusaurusContext().siteConfig.themeConfig;
};

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

const FooterLogo = ({ url, alt }) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }
  React.useEffect(function mount() {
    let user = window.localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      if (
        document
          .getElementsByClassName("navbar__items")[0]
          .innerHTML.includes(user.name)
      )
        return;
      document.getElementsByClassName(
        "navbar__items"
      )[0].innerHTML += `<div class = "google--user-content-200928383"><img  class = "imageuser" src ="${user.img}" /><div style="float:right;margin-top:5px;margin-left:10px;margin-right:10px;">${user.name}</div></div>`;
    } else {
      if (
        document.getElementsByClassName("navbar__items")[0].innerHTML.includes(`
    <div class="g-signin2"`)
      )
        return;
      document.getElementsByClassName("navbar__items")[0].innerHTML += `
    <div class="g-signin2" data-onsuccess="onSignIn"></div>`;
    }
  });
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": footer.style === "dark",
      })}
    >
      <Head>
        <script src="/themeChange.js" />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
        <script src="/gauthHandler.js" />
        <meta
          name="google-signin-client_id"
          content="1031722786374-gsmevlsgl1l2g3uk1hdku0n3oipviqgn.apps.googleusercontent.com"
        ></meta>
      </Head>
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item" // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className="text--center">
            {logo && logo.src && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLogoLink}
                  >
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a>
                ) : (
                  <FooterLogo alt={logo.alt} url={logoUrl} />
                )}
              </div>
            )}

            <div // Developer provided the HTML, so assume it's safe.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: copyright,
              }}
            />
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
