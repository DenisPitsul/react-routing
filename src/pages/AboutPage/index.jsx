import React from "react";
import modules from "./AboutPage.module.scss";

function AboutPage() {
  return (
    <>
      <section className={modules.resume}>
        <img className={modules.photo} src="/photo.jpg" alt="My photo" />
        <div className={modules.infoWrapper}>
          <div className={modules.infoBlock}>
            <h1 className={modules.name}>Denis Pitsul</h1>
            <p className={modules.subtitle}>JavaScript Fullstack developer</p>
          </div>
          <div className={modules.infoBlock}>
            <h2 className={modules.subtitle}>About me</h2>
            <p className={modules.info}>
              I am determined person, organized and with excellent problem
              solving skills. I like working in a team, comparing myself with
              other ideas but at the same time being able to express and propose
              my own. I am a reliable person and ready to learn new things with
              great ease and speed.
            </p>
          </div>
          <div className={modules.infoBlock}>
            <h2 className={modules.subtitle}>Skills</h2>
            <p className={modules.info}>
              <ul className={modules.list}>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>Frontend:</span>{" "}
                  HTML, CSS, JavaScript, Typescript, React, Redux, Redux Toolkit
                </li>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>Backend:</span>{" "}
                  HTTP, REST, WebSockets, Node.js, Express
                </li>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>Database:</span>{" "}
                  PostgreSQL
                </li>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>
                    QA Automation:
                  </span>{" "}
                  Java, Selenium, RestAssured
                </li>
              </ul>
            </p>
          </div>
          <div className={modules.infoBlock}>
            <h2 className={modules.subtitle}>Experience</h2>
            <p className={modules.info}>
              <ul className={modules.list}>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>Solvd:</span> June
                  2020 - May 2022 - Java QA Automation engineer
                </li>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>Squad:</span> May
                  2022 - June 2022 - Java Software Developer in Test
                </li>
                <li className={modules.listItem}>Database: PostgreSQL</li>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>TestMatick:</span>{" "}
                  June 2023 - September 2023 - Java QA Automation engineer
                </li>
              </ul>
            </p>
          </div>
          <div className={modules.infoBlock}>
            <h2 className={modules.subtitle}>Education</h2>
            <p className={modules.info}>
              <ul className={modules.list}>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>
                    Bachelor degree:
                  </span>{" "}
                  Chernivtsi National University Software engineering 2016 -
                  2020
                </li>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>
                    Master degree:
                  </span>{" "}
                  Chernivtsi National University Software engineering 2020 -
                  2021
                </li>
              </ul>
            </p>
          </div>
          <div className={modules.infoBlock}>
            <h2 className={modules.subtitle}>Languages</h2>
            <p className={modules.info}>
              <ul className={modules.list}>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>Ukrainian:</span>{" "}
                  Native
                </li>
                <li className={modules.listItem}>
                  <span className={modules.listItemCaption}>English</span>{" "}
                  Intermediate
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
