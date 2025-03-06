import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi! <span className={styles.highlight}>I'm Claude</span>
          </h1>
          <p className={styles.description}>
            and uhhhh, uhmmmm, why don't you move along please...
          </p>
          <div className={styles.cta}>
            <a href="/#gallery" className={styles.primary}>
              View Gallery
            </a>
            <a href="/#contact" className={styles.secondary}>
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={400}
              height={400}
              priority
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}