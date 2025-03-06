"use client";

import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}