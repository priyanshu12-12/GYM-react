import React from "react";
import "../styles.css";
import About from "./about";
import Footer from "./footer";
export default function home() {
  return (
    <div>
      <div className="background">
        <h1>Make fitness a habit.</h1>
        <h2>
          {" "}
          Motivation is what gets you started. Habit is what keeps you going.
        </h2>
        <h2> - Jim Ryin.</h2>
        <h1 className="metal">METAL GYM</h1>
        <h1>What are you waiting for?</h1>
      </div>
      <div className="twoparts container">
        <h2 className="popular">Popular classes</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card text-bg-dark">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/lalalalaldsfdfsgd-mp01aEkz4pC4bE1J.png"
                className="card-img-top frstpic"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Cardio</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/woman-in-black-sports-bra-and-black-pants-sitting-on-white-m26LKr5ZNeiyXWBK.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">AirYoga</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-YbxWoy3LQXubRjXv.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lifting</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/woman-lifting-barbell-m57zVrgrrLSW97Vy.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Press & Back</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}
