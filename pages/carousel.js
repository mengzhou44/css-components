import Head from 'next/head';
import styles from './carousel.module.css';

const Carousel = () => {
  return (
    <div>
      <Head>
        <title> Carousel</title>
      </Head>

      <div className={styles.carousel}>
        <img className={styles.image} src="maria.jpg" alt="maria" />
        <blockquote className={styles.testimonial}>
          <p className={styles.text}>
            "Magna nulla nisi fugiat aliqua dolor. Officia deserunt duis non
            laboris adipisicing velit voluptate voluptate aliquip. Ipsum duis do
            aliquip quis occaecat. In elit quis exercitation nulla mollit
            pariatur voluptate ad ullamco et elit."
          </p>
          <p className={styles.author}>Maria</p>
          <p className={styles.job}>Senior Project Manager at EDP Commerical</p>
        </blockquote>
        <button className={`${styles.button} ${styles.buttonLeft}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={styles.icon}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className={`${styles.button} ${styles.buttonRight}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={styles.icon}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className={styles.dots}>
          <button className={`${styles.dot} ${styles.dotFill}`}>&nbsp;</button>
          <button className={styles.dot}>&nbsp;</button>
          <button className={styles.dot}>&nbsp;</button>
          <button className={styles.dot}>&nbsp;</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
