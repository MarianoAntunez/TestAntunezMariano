import React, { useEffect, useState } from "react";
import releaseData from "./JSON/releaseNotes.json";
import "./App.css";
import Image from "./utilities/images/image_10.png";

const App = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="releaseNotes-Nav">
        <h1>Release Notes</h1>
      </div>
      <div className="release-notes-container">
        <div className="release-notes">
          <section className="release fade-in">
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

            <div className="section section1">
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
                      <i class="fa-solid fa-inbox"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Inbox</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i class="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                  <div className="options">
                    <div className="iconOption">
                      <i class="fa-regular fa-envelope"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Email</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i class="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                  <div className="options">
                    <div className="iconOption">
                      <i class="fa-solid fa-tv"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Browser</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i class="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                  <div className="options">
                    <div className="iconOption">
                    <i class="fa-solid fa-mobile-screen"></i>
                      <div className="lab">
                        <label htmlFor="inbox">Mobile</label>
                        <small>Default ● CklickUp's recommended setting</small>
                      </div>
                    </div>
                    <div className="lab2">
                      <i class="fa-solid fa-gear"></i>
                      <select id="inbox">
                        <option value="default">Default</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section section2">
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

            <div className="section section3">
              <h3>Redesigned Time Tracking</h3>
              <div className="filters">
                <p className="Feat">Fix</p>
                <p>Jul 15, 2024</p>
              </div>
              <p className="descriptions">
                {
                  releaseData.releaseNotes.sections.redesignedTimeTracking
                    .description
                }
              </p>
              <img src={Image} alt="" />
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
