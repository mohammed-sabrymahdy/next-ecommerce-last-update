import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SignInButton from "../SignInButton";
import Mesa from "../mesa";

export default function Header() {
  return (
    <header id="headerElement" className="header">
      {/* Logo */}
      <Link href="/" className="logo">
        <FontAwesomeIcon icon={faBagShopping} className="logo-icon" />
        <span className="logo-text">AWU</span>
        <p className="logo-subtext">Shopping</p>
      </Link>

      <Mesa />
      {/* Navbar */}
      <nav className="links">
        <Link
          href="/cart"
          className="cart"
          style={{ border: "#0000 2px ", background: "#0000" }}
        >
          <FontAwesomeIcon icon={faCartShopping} className="icon-small" />
          $0.00
          <span className="products-number">2</span>
        </Link>
        <SignInButton />
      </nav>
    </header>
  );
}
