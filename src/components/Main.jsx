import React from "react";
import banner_mid from "../assets/banner_mid.png";
import watch_party from "../assets/watch_party.gif";
import details_img from "../assets/details_img.jpg";
import demo_profile from "../assets/dev_gif.png";
import googledev from "../assets/googledev.jpg";
import ptulogo from "../assets/classic-logo.png";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

import { faFacebook, faTwitter,faInstagram , faLinkedin  } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import ImageComponent from "./ImageComponent.jsx";

const Main = () => {
  return (
    <>
      {/* <img src={banner_mid} width="100%" height="250px" alt="" /> */}
      <ImageComponent />
      <div className="main-content d-flex flex-wrap">
        <div className="info">
          <h1 className="font-weight-lighter header">
            Most Awaited <span id="tech-event">Tech-Event</span> For{" "}
            <span id="developers">Developers</span>
          </h1>

          <div>
            <h6>
              <i className="fa fa-calendar"></i> Date :{" "}
              <span id="data">August 12 , 2023</span>
            </h6>
            <h6>
              <i className="fa fa-clock"></i> Time :{" "}
              <span id="data">09:00 AM - 4:00 PM IST</span>
            </h6>
            <h6 id="location">
              <i className="fa fa-map-marker"></i> Location:{" "}
              <span id="data">
                I.K. Gujral Punjab Technical University -9F35+9F9, Kapurthala
                Highway, VPO - Ibban, Distt, Kapurthala, Punjab 144603
              </span>
            </h6>
            <p id="location">
              Google I/O Extended is the community led counterpart to Google
              I/O, our annual Google led conference where the world hears about
              Google's latest developer solutions, products, and technology.
            </p>

            <button id="register">Register Now</button>
          </div>
        </div>

        <img
          src={watch_party}
          width="580px"
          height="350px"
          className="watch_party"
          alt=""
        />
      </div>

      <div className="details d-flex">
        <img src={details_img} className="detailsImg" width="550px" alt="" />

        <section className="detailsSec">
          <h2>What is Google I/O Extended Jalandhar ?</h2>
          <p>
            Google I/O Extended Jalandhar, a full day event, where you find
            updates of Google's Products. The magic of I/O doesn’t end after the
            main event. Local developers come together for I/O Extended events
            to discuss the latest new technologies, summarize content, hosting
            Q&As, and meet other technology enthusiasts. This will be a physical
            event, promising to each of our attendee an experience, unlike
            anything they've ever seen.
          </p>
        </section>
      </div>

      <div className="tech">
        <h1>Technologies to be focused</h1>
        <p>
          At sessions that span from the technical to the visionary, let’s
          celebrate and discover what the technologies can enable: how product
          innovation, open source, and ML and AI can propel enterprises forward
          and solve the big problems that impact all of us.
        </p>

        <div className="icons d-flex">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
      </div>

      <hr />

      {/* Schedule Section */}

      <div className="schedule-section">
        <h1 className="schedule-title">Schedule</h1>
        <section>
          <div className="container py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Registration</h3>
                    <p className="mb-0">
                      Get here on time, it's first come first serve. Be late,
                      get turned away.
                    </p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 1</h3>
                    <p className="mb-0">Welcome Keynote</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 2</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 3</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 4</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 5</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Speakers */}
      <div className="schedule-section">
        <h1 className="schedule-title">Speakers</h1>
        <div className="responsive-container-block container ">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Speaker</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}

        <hr />
      <div className="partners">
        <h2 className="text-center mt-2">Sponsors</h2>
        <p className="text-center mt-2">
          Sponsors dedicated to building remarkable experience!
        </p>

        <div className="googledev">
          <a href="">
            <img
              src={googledev}
              title="Google Developers"
              className="googledevimg"
              alt=""
            />
          </a>
          <p className="text-center venue-text">Venue Partner</p>
          <a href="">
            <img
              src={ptulogo}
              title="Google Developers"
              className="googledevimgptu"
              alt=""
            />
          </a>
        </div>
      </div>

      {/* Team */}

        <hr />
      <div className="team">
        <h2 className="text-center mt-2">Team</h2>

        <div className="responsive-container-block container">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Team</p>
                {/* <p className="text-blk feature-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <div className="social-icons">
                  <a href="https://www.twitter.com" target="_blank">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

        <hr />
      <div className="faqs">
        <h2 className="text-center mt-2">Frequently asked questions</h2>
        <p className="text-center mt-2">
          Need Answers? Everything you need to know.
        </p>
      </div>

      <MDBContainer className="mt-5" style={{ maxWidth: "90%" }}>
        <MDBAccordion alwaysOpen initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="What is Google I/O Extended ?"
          >
            Google I/O Extended is the community led counterpart to Google I/O,
            our annual Google led conference where the world hears about
            Google's latest developer solutions, products, and technology.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="What are GDG's ?">
            GDGs are focused on community building and learning about Google’s
            technologies.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="Who can register for I/O Extended ?"
          >
            Beginners, experts, literally everyone. Anyone with the passion of
            learning, who’s fond of technology, passionate programmers ,
            everybody can register and attend.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="Is it mandatory to register to participate in the event ?"
          >
            Yes. Each individual may register for only one ticket. You may not
            register on behalf of anyone else.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="I’m a beginner in programming. Can I still register?"
          >
            Yes. Anybody with the zeal in technology can register. We have
            special tracks especially for beginners.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle="What will attendees get by participating in the event ?"
          >
            We have a plethora of AMAZING perks awaiting for you!
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={7}
            headerTitle="How can I become a member of GDG ?"
          >
            {" "}
            Head to Google developers group website
            (https://gdg.community.dev/gdg-jalandhar/)
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={8}
            headerTitle="How can I communicate my queries ?  {email not found}"
          >
            Reach out to us at: [???@gmail.com]
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>

      {/* Footer */}

      <div className="footer">
        <div className="footer-content">
          <a className="footer-heading" href="">I/O Extended Jalandhar</a>
          <section className="d-flex  follow-section">
            <h5>Follow Us : </h5>
            <div className="followus ">
            <FontAwesomeIcon className="ml-3 pl-3 footer-icons foot-fb" icon={["fab", "facebook"]} />
            <FontAwesomeIcon className="ml-3 pl-3 footer-icons foot-in" icon={["fab", "instagram"]} />
            <FontAwesomeIcon className="ml-3 pl-3 footer-icons foot-li" icon={["fab", "linkedin"]} />
            <FontAwesomeIcon className="ml-3 pl-3 footer-icons foot-tw" icon={["fab", "twitter"]} />
            </div>
          </section>
          <hr className="footer-hr" />

          <section className="d-flex footer-link-section">
            <a href="">Google I/O 2023</a>
            <a className="footer-links" href="">
              About GDG Program
            </a>
            <a className="footer-links" href="">
              About WTM Program
            </a>
            <a className="footer-links" href="">
              Community Guidelines
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
