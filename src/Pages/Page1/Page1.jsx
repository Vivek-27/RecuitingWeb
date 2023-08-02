import React from 'react';
import './page1.css';

const Page1 = () => {
  return (
    <>
      <div className="page1">
        <div className="left">
          <h1>
            Get Hired <br /> to your Dream <br />
            Job. Now.
          </h1>
          <p>
            Look beyond the obvious. Use Cutshort to easily get discovered by
            awesome companies and get referred to job positions very few know
            about.
          </p>
          <div className="btn">
            <button
              style={{
                borderRadius: '25px',
                padding: '10px 25px',
                color: ' rgb(87, 87, 87)'
              }}
            >
              Find Jobs
            </button>
            <button
              className="invertBtn"
              style={{ borderRadius: '25px', padding: '10px 25px' }}
            >
              {' '}
              Hire Talent
            </button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Page1;
