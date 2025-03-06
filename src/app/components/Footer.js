'use client';

import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.social}>
          <a href="https://github.com/Claude-Famador" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/claude-jairo-famador-343133289/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaLinkedin />
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Claude Famador. :3c
        </p>
      </div>
      <button
        className={`${styles.scrollTop} ${isVisible ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <IoIosArrowUp />
      </button>
    </footer>
  );
}