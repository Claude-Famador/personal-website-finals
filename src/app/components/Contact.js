"use client";

import styles from './Contact.module.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2>Contact Me</h2>
        <div className={styles.contactInfo}>

          <div className={styles.infoItem}>
            <FaLinkedin className={styles.icon} />
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/claude-jairo-famador-343133289/" target="_blank" rel="noopener noreferrer">
              Click me!!
            </a>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">famadorcj@gmail.com </a>
          </div>
          <div className={styles.infoItem}>
            <FaGithub className={styles.icon} />
            <h3>GitHub</h3>
            <a href="https://github.com/Claude-Famador" target="_blank" rel="noopener noreferrer">
              Click me!!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}