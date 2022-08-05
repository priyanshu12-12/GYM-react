import React from "react";
import "../styles.css";
import Footer from "./footer";
export default function price() {
  return (
    <div>
      <h1>Our Prices!!</h1>
      <div className="plans">
        <div className="plans2">
          <div className="p1 card text-bg-danger mb-3">
            <h1>Basic</h1>
            <h3>Price: $10</h3>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
          </div>
          <div className="p2 card text-bg-warning mb-3">
            <h1>Advance</h1>
            <h3>Price: $30</h3>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
          </div>
          <div className="p3 card text-bg-info mb-3">
            <h1>Pro</h1>
            <h3>Price: $70</h3>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
          </div>
          <div className="p4 card text-bg-dark mb-3">
            <h1>Superman</h1>
            <h3>Price: $100</h3>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
            <p>saijvbajiv</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
