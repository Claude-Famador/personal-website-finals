"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';

const images = [
    { src: '/static/media/image1.jpg', alt: 'Gallery Image 1' },
    { src: '/static/media/image2.jpg', alt: 'Gallery Image 2' },
    { src: '/static/media/image3.jpg', alt: 'Gallery Image 3' },
    { src: '/static/media/jaiden.jpg', alt: 'Gallery Image 4' },
    { src: '/static/media/minecwaft.jpg', alt: 'Gallery Image 5' },
    { src: '/static/media/image6.jpg', alt: 'Gallery Image 6' },
    { src: '/static/media/image7.jpg', alt: 'Gallery Image 7' },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection(1);
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection(-1);
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const getSlideClassName = (index) => {
    if (index === currentIndex) return styles.active;
    if (direction > 0 && index === (currentIndex + 1) % images.length) return styles.next;
    if (direction < 0 && index === (currentIndex - 1 + images.length) % images.length) return styles.prev;
    return '';
  };

  return (
    <section className={styles.gallery} id="gallery">
      <h2 className={styles.title}>Image Gallery</h2>
      <div className={styles.carouselContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`} 
          onClick={handlePrev}
          aria-label="Previous image"
        >
          ‹
        </button>
        <div className={styles.carousel}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${getSlideClassName(index)}`}
              style={{
                transition: isTransitioning ? 'all 0.4s ease-in-out' : 'none'
              }}
            >
              {true && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  priority={index === currentIndex}
                  loading={index === currentIndex ? "eager" : "lazy"}
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR0XFx4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              )}
            </div>
          ))}        
        </div>
        <button 
          className={`${styles.navButton} ${styles.nextButton}`} 
          onClick={handleNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </section>
  );
}