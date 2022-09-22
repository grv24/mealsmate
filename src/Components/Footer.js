import React from "react";
import logo from "./Logo/logo.jpeg";

export default function Footer() {
  return (
    <div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mx-3 link-dark text-decoration-none"
          >
            <img src={logo} height="85" alt="" />
          </a>
          <p className="text-muted mx-4">© 2022</p>
        </div>

        <div className="col mb-3">
          <h5>Sure choice of Restaurants</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Our Story</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Our Story</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Important Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="container d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="/">
              <svg className="bi" width="24" height="24">
                <use href="/twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="/">
              <svg className="bi" width="24" height="24">
                <use href="/instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="/">
              <svg className="bi" width="24" height="24">
                <use href="/facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
