import React from 'react'
import banner_mid from '../assets/banner_mid.png'
import watch_party from '../assets/watch_party.gif'
import details_img from '../assets/details_img.jpg'
import demo_profile from '../assets/dev_gif.png'

import googledev from "../assets/googledev.svg";
import ptulogo from "../assets/classic-logo.png";
const Main = () => {
  return (
    <>
        <img src={banner_mid} width='100%' height='250px' alt="" />

        <div className='main-content d-flex'>

        <div className="info">

        <h1 className='font-weight-lighter header'>Most Awaited <span id="tech-event">Tech-Event</span> For <span id='developers'>Developers</span> </h1>

        <div>
            <h6> <i className='fa fa-calendar'></i> Date : <span id='data'>August 12 , 2023</span> </h6>
            <h6> <i className='fa fa-clock'></i> Time : <span id='data'>09:00 AM - 4:00 PM IST</span>  </h6>
            <h6 id='location'> <i className='fa fa-map-marker'></i> Location: <span id='data'> I.K. Gujral Punjab Technical University -9F35+9F9, Kapurthala Highway, VPO - Ibban, Distt, Kapurthala, Punjab 144603</span>  </h6>
            <p id='location'>Google I/O Extended is the community led counterpart to Google I/O, our annual Google led conference where the world hears about Google's latest developer solutions, products, and technology.</p>

            <button id='register'>Register Now</button>
        </div>
        </div>


        <img src={watch_party} width='580px' height='350px' className='watch_party' alt="" />

        </div>

        <div className="details d-flex">
          <img src={details_img} className='detailsImg' width='550px' alt="" /> 

          <section className='detailsSec'>
            <h2>What is Google I/O Extended Jalandhar ?</h2>
            <p>Google I/O Extended Jalandhar, a full day event, where you find updates of Google's Products. The magic of I/O doesn’t end after the main event. Local developers come together for I/O Extended events to discuss the latest new technologies, summarize content, hosting Q&As, and meet other technology enthusiasts. This will be a physical event, promising to each of our attendee an experience, unlike anything they've ever seen.</p>
          </section>
        </div>

        <div className="tech">
          <h1>Technologies to be focused</h1>
          <p>At sessions that span from the technical to the visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.</p>

          <div className="icons d-flex">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>

        {/* Schdedule section */}

        <div className="schedule">
        <hr />
          <h2 className='text-center'>Schedule</h2>

          <div className="schd">
          <div className="time">
            <ul>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
              <li id="time-stamp">9:00AM</li>
            </ul>
          </div>
          <div className="box-schedule">

          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>

          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>

          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>

          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>

          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>
          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>

          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>

          <div className="schd-content">
            <h6> Registration</h6>
            <p className='mt-0 schd-p'>Get here on time, it's first come first serve. Be late, get turned away.</p>
            <hr />
          </div>


</div>
          </div>
        </div>

        {/* Speakers Section */}

        <div className="speakers">
        <hr />
          <h2 className='text-center mt-4'>Speakers</h2>

          <div className="profile-img d-flex">
            <div className="profile-div">
            <img src={demo_profile} className='speaker-profile' alt="" />
            <h5 className='sp-name'>Speaker 1</h5>
            <h6 className='sp-title'>Co-founder</h6>
            <h6 className='sp-brand'>Apna Dukan</h6>
            </div>

            <div className="profile-div">
            <img src={demo_profile} className='speaker-profile' alt="" />
            <h5 className='sp-name'>Speaker 1</h5>
            <h6 className='sp-title'>Co-founder</h6>
            <h6 className='sp-brand'>Apna Dukan</h6>
            </div>

            <div className="profile-div">
            <img src={demo_profile} className='speaker-profile' alt="" />
            <h5 className='sp-name'>Speaker 1</h5>
            <h6 className='sp-title'>Co-founder</h6>
            <h6 className='sp-brand'>Apna Dukan</h6>
            </div>

            <div className="profile-div">
            <img src={demo_profile} className='speaker-profile' alt="" />
            <h5 className='sp-name'>Speaker 1</h5>
            <h6 className='sp-title'>Co-founder</h6>
            <h6 className='sp-brand'>Apna Dukan</h6>
            </div>

            <div className="profile-div">
            <img src={demo_profile} className='speaker-profile' alt="" />
            <h5 className='sp-name'>Speaker 1</h5>
            <h6 className='sp-title'>Co-founder</h6>
            <h6 className='sp-brand'>Apna Dukan</h6>
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
          {" "}
          <img
            src={googledev}
            title="Google Developers"
            className="googledevimg"
            width="200px"
            alt=""
          />{" "}
        </a>

        <p className="venue-text">Venue Partner</p>
        <a href="">
          {" "}
          <img
            src={ptulogo}
            title="Google Developers"
            className="googledevimg"
            width="250px"
            alt=""
          />{" "}
        </a>
      </div>
    </div>

    {/* Team */}

    <div className="team">
      <hr />
      <h2 className="text-center mt-2">Team</h2>


    </div>

    {/* Footer */}

    <div className='footer'>
     <div className="footer-content">
     <a href="">I/O Extended Jalandhar</a>
        <section className='d-flex'>
            <h5>Follow Us : </h5>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-linkedin'></i>
        </section>
        <hr />

        <section className='d-flex'>

        <a href="">Google I/O 2023</a>
        <a className='footer-links' href="">About GDG Program</a>
        <a className='footer-links' href="">About WTM Program</a>
        <a className='footer-links' href="">Community Guidlines</a>


        </section>
     </div>
    </div>
        
    </>
  )
}

export default Main