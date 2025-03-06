"use client";

import Image from 'next/image';
import styles from './About.module.css';
import BackgroundGlow from './BackgroundGlow';
import SectionDivider from './SectionDivider';

export default function About() {
  return (
    <>
      <SectionDivider />
      <section id="about" className={styles.about}>
        <BackgroundGlow />
        <div className={styles.container}>
          <h2 className={styles.title}>About Me</h2>
          <div className={`${styles.content} ${styles.reverse}`}>
            <div className={styles.textBlock}>
              <h3 className={styles.subtitle}>Things I Play</h3>
              <p className={styles.description}>
                Most of the time when I'm not groveling on my bed, I play games alot of them but to generalize them I mostly play things like
              </p>
              <p className={styles.description}>
                - Rhythm games
              </p>
              <p className={styles.description}>
                - Roguelikes/Roguelites
              </p>
              <p className={styles.description}>
                - DND and many more
              </p>
            </div>
            <div className={styles.videoBlock}>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                width={500}
                height={300}
                className={styles.aboutVideo}
              >
                <source src="/gd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.textBlock}>
              <h3 className={styles.subtitle}>Hobbies</h3>
              <p className={styles.description}>
                As for my hobbies, there's not much to talk about other than me drawing subpar sketches in MS Paint, more can be seen in the Image Gallery below, but other than that I do still try to 
                do video editing but my device can barely handle applications at this point...
              </p>
            </div>
            <div className={styles.imageBlock}>
            <Image
              src="https://raw.githubusercontent.com/Claude-Famador/personal-website-finals/main/public/wip.jpg"
              alt="WIP"
              width={400}
              height={250}
              loading="lazy"
              className={styles.aboutImage}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg=="
            />
            </div>
          </div>

          <div className={`${styles.content} ${styles.reverse}`}>
            <div className={styles.textBlock}>
              <h3 className={styles.subtitle}>Education</h3>
              <p className={styles.description}>
                Not much to add other than grauating from a Science High School and just went to CS for the sake of learning something out of my comfort zone
                as I never really had prior knowledge to things like coding but was just persuaded to do so and I feel obligated to do it, yet here I am making a decent 
                looking portfolio to go along with it so I guess it wasn't all for naught. Also here's an image of me and my group back in HS after doing a research study
                defense!
              </p>
            </div>
            <div className={styles.imageBlock}>
              <Image
                src="/defense.jpg"
                alt="Journey"
                width={400}
                height={250}
                loading="lazy"
                className={styles.aboutImage}
                placeholder="blur"
                blurDataURL="https://fakeimg.pl/600x400"
              />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.textBlock}>
              <h3 className={styles.subtitle}>Extras</h3>
              <p className={styles.description}>
                I had such a harrowing time making this along with all the other projects, but I can say that I definitely had
                the most fun making this project as it not only made me look outward in terms of designing but actually implement the
                teachings within this class, so safe to say that I'm proud of this outcome and definitely am looking forward in making 
                more projects similar to this.
              </p>
            </div>
            <div className={styles.imageBlock}>
              <Image
                src="/PURINNN.jpg"
                alt="Skills"
                width={400}
                height={250}
                loading="lazy"
                className={styles.aboutImage}
                placeholder="blur"
                blurDataURL="https://fakeimg.pl/600x400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}