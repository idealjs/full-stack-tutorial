import React, { Fragment } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

const HomePageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Fragment>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs">
              快速开始 - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/idealjs/stack/discussions"
            >
              参与讨论
            </Link>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="全栈教程">
      <HomePageHeader />
    </Layout>
  );
};

export default Home;
