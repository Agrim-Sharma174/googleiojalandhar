import React from "react";
import banner_mid from "../assets/banner_mid.png";
import watch_party from "../assets/watch_party.gif";
import details_img from "../assets/details_img.jpg";
import demo_profile from "../assets/dev_gif.png";
import googledev from "../assets/googledev.jpg";
import ptulogo from "../assets/classic-logo.png";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const Main = () => {
  return (
    <>
      <img src={banner_mid} width="100%" height="250px" alt="" />

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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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

      <div className="partners">
        <hr />
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

      <div className="team">
        <hr />
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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
                <p className="text-blk name">Davis George</p>
                <p className="text-blk position">CEO</p>
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

      <div className="partners">
        <hr />
        <h2 className="text-center mt-2">Frequently asked questions</h2>
        <p className="text-center mt-2">
          Need Answers? Everything you need to know.
        </p>
      </div>

      <MDBContainer className="mt-5" style={{ maxWidth: "90%" }}>
        <MDBAccordion alwaysOpen initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle="Question #1">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Question #2">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Question #3">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>

      {/* Footer */}

      <div className="footer">
        <div className="footer-content">
          <a href="">I/O Extended Jalandhar</a>
          <section className="d-flex">
            <h5>Follow Us : </h5>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </section>
          <hr />

          <section className="d-flex">
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
