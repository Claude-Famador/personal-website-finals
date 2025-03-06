"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  // Add this function to your Navbar component
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update your navigation links
  <a onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</a>

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={scrollToTop}>
          Portfolio
        </Link>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <Link href="/" onClick={scrollToTop}>
            Home
          </Link>
          <Link href="/#about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/#gallery" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}>
            Gallery
          </Link>
          <Link href="/#contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}