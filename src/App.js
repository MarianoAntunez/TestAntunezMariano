import React, { useEffect } from "react";
import releaseData from "./JSON/releaseNotes.json";
import "./App.css";

const App = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const mouseScroll = () => {
      fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", mouseScroll);
    mouseScroll();

    return () => {
      window.removeEventListener("scroll", mouseScroll);
    };
  }, []);

  return (
    <div>
      <div className="progress-bar"></div>

      <div className="releaseNotes-Nav">
        <h1>Release Notes</h1>
      </div>
      <div className="release-notes-container">
        <div className="release-notes">
          <section className="release">
            <div className="sectionFilter">
              <h2>Release 6.5</h2>
              <div className="drop">
                <small>Short by:</small>
                <select>
                  <option value="All">All</option>
                  <option value="Features">Feat</option>
                  <option value="Bug Fixes">Fix</option>
                </select>
              </div>
            </div>
            <hr />

            <div className="section section1 fade-in">
              <i className="fa-solid fa-circle indicator"></i>
              <h3>Redesigned notifications</h3>
              <div className="filters">
                <p className="Feat">Feat</p>
                <p>Aug 10, 2024</p>
              </div>
              <p className="descriptions">
                {
                  releaseData.releaseNotes.sections.redesignedNotifications
                    .description
                }
              </p>
              <div className="notification-settings">
                <h2>Notification Setings</h2>
                <div className="dropdowns">
                  <div className="options">
                    <div className="iconOption">
                      <i className="fa-solid fa-inbox"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Inbox</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i className="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                  <div className="options">
                    <div className="iconOption">
                      <i className="fa-regular fa-envelope"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Email</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i className="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                  <div className="options">
                    <div className="iconOption">
                      <i className="fa-solid fa-tv"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Browser</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i className="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                  <div className="options">
                    <div className="iconOption">
                      <i className="fa-solid fa-mobile-screen"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Mobile</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i className="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section section2 fade-in">
              <i className="fa-solid fa-circle indicator"></i>
              <h3>Bugs</h3>
              <div className="filters">
                <p className="Fix">Fix</p>
                <p>Jul 3, 2023</p>
              </div>
              <p className="descriptions">
                {releaseData.releaseNotes.sections.bugs.description}
              </p>
              <p className="descriptions">
                {releaseData.releaseNotes.sections.bugs.description2}
              </p>
              <ul>
                {releaseData.releaseNotes.sections.bugs.list.map(
                  (bug, index) => (
                    <li key={index}>{bug}</li>
                  )
                )}
              </ul>
            </div>

            <div className="section section3 fade-in">
              <i className="fa-solid fa-circle indicator"></i>
              <h3>Redesigned Time Tracking</h3>
              <div className="filters">
                <p className="Feat">Feat</p>
                <p>Jul 15, 2024</p>
              </div>
              <p className="descriptions">
                {
                  releaseData.releaseNotes.sections.redesignedTimeTracking
                    .description
                }
              </p>
              <div className="edit-form">
                <h2>Edit Sprint Folder</h2>
                <div>
                  <div className="form-group">
                    <label>Sprint name</label>
                    <div className="input-container">
                      Weekly sprint (6/17 - 6/21)
                    </div>
                    <small>
                      Must include {`{INDEX}`} - a sequential number for each
                      Sprint starting with 1
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Default template</label>
                    <div className="input-container">
                      Weekly template <i className="fa-solid fa-x"></i>
                    </div>
                  </div>
                  <div className="S-P">
                    <div className="form-group">
                      <label>Sprint duration</label>
                      <div className="input-container divi">
                        2 weeks <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Date format</label>
                      <div className="input-container divi">
                        MM/DD <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Sprint timezone</label>
                    <div className="input-container">
                      (GMT +01:00) Africa/Lagos (WAT)
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="all-release-notes">
          <h2>All release notes</h2>
          <ul>
            {releaseData.releaseNotes.allReleaseNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
