import React from "react";
import "../styles.css";
import Footer from "./footer";
export default function () {
  return (
    <div className="container forms">
      <h1>CONTACT US</h1>
      <form>
        <div class="mb-3">
          <div class="mb-3">
            <label for="name" class="form-label">
              NAME
            </label>
            <input type="text" class="form-control" id="name" />
          </div>
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="number" class="form-label">
            Contact Number
          </label>
          <input type="number" class="form-control" id="Number" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
