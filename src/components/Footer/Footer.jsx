import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="top">DREAM</div>
          <div className="bottom">
            Copyright © 2023 DREAM (formerly DREAM). All rights reserved.
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="first">
              <p>For Candidates</p>
              <ul>
                <li>Overview</li>
                <li>Startup Jobs</li>
                <li>Web3 Jobs</li>
                <li>Featured</li>
                <li>Salary Calculator</li>
                <li>Startup Hiring Data</li>
                <li>Tech Startups</li>
                <li>Remote</li>
              </ul>
            </div>

            <div className="second">
              <p>For Recruiters</p>
              <ul>
                <li>Overview</li>
                <li>Recruit Pro</li>
                <li>Curated</li>
                <li>Hire Developers</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="third">
              <p>Company</p>
              <ul>
                <li>About</li>
                <li>DreamList Venture</li>
                <li>Help</li>
                <li>Blog</li>
                <li>Terms & Risks</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            Browse by: Jobs, Remote Jobs, Locations, Startups, Industries, Tech
            Hubs
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
