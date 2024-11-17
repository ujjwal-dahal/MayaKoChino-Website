"use client";

import "./Navbar.scss";
import Image from "next/image";
import Logo from "../../../public/images/mayakochino-logo.jpg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {


  return (
    <nav className="navbar">
      <div className="upper-container">
        <div className="logo-container">
          <Link className="logo" href={"/"}>
            <Image src={Logo} alt="mayakochino-logo" />
          </Link>
          <div className="logo-name">
            Maya <br /> को चिनो
          </div>
        </div>
        <div className="search-container">
          <input type="search" name="search" className="search-box" placeholder="Search for products..." />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="cart-container">
          <button>
            <FaCartShopping />
            <p>Cart</p>
          </button>
        </div>
        <div className="auth-container">
          <p>Login / Signup</p>
          <button>
            <p>My Account</p>
            <FaLock />
          </button>
        </div>
      </div>

      <div className="lower-container">
          <Link className="link" href={"/about"}>About</Link>
          <Link className="link" href={"/offers"}>Offers</Link>
          <Link className="link" href={"/categories"}>Categories</Link>
          <Link className="link" href={"/gifts"}>Gifts</Link>
          <Link className="link" href={"/electronics"}>Electronics</Link>
          <Link className="link" href={"/policy"}>Policy</Link>
          <Link className="link" href={"/contact"}>Contact</Link>

      </div>
    </nav>
  );
}
