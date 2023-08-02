import React from 'react';
import './page2.css';

const Page2 = () => {
  return (
    <>
      <div className="page2">
        <span>
          30,00,000+ professionals from 16,500 companies are cutting short their
          path to success
        </span>
        <div className="companies">
          <div className="company">
            <img
              src="https://img.icons8.com/?size=1x&id=17949&format=png"
              alt=""
            />
            <i>Google</i>
          </div>
          <div className="company">
            <img
              src="https://img.icons8.com/?size=1x&id=22989&format=png"
              alt=""
            />
            <i>Micorsoft</i>
          </div>
          <div className="company">
            <img
              src="https://img.icons8.com/?size=1x&id=21295&format=png"
              alt=""
            />
            <i>Amazon</i>
          </div>
          <div className="company">
            <img
              src="https://img.icons8.com/?size=1x&id=PvvcWRWxRKSR&format=png"
              alt=""
            />
            <i>Meta</i>
          </div>
          <div className="company">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png"
              alt=""
            />
            <i>GoldmanSuchs</i>
          </div>
          <div className="company">
            <img
              src="https://w7.pngwing.com/pngs/880/528/png-transparent-infosys-logo-and-slogan-thumbnail.png"
              alt=""
            />
            <i>Infosys</i>
          </div>
          <div className="company">
            <img
              src="https://seeklogo.com/images/W/wipro-new-logo-AE49EC166D-seeklogo.com.png"
              alt=""
            />
            <i>Wipro</i>
          </div>
          <div className="company">
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-flipkart-round-logo-icon-transparent-png-11664325137typezbr9k9.png?v=2023072913"
              alt=""
            />
            <i>Flipkart</i>
          </div>
        </div>
        <div className="hire">
          <h1 style={{ fontWeight: 300, paddingBottom: '40px' }}>
            Ready to realise your true potential?
          </h1>
          <button style={{ marginRight: '20px' }}>Connect with us.</button>
          <button className="invertBtn">log In</button>
        </div>
      </div>
    </>
  );
};

export default Page2;
