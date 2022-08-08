import Head from 'next/head';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div>
      <Head>
       
      </Head>
      <div className={styles.hero}>
        <nav className={styles.nav}>
          <div>Logo</div>
          <div>Navigation</div>
        </nav>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Labore commodo <br />
            eiusmod nostrud
          </h1>
          <p className={styles.description}>
            Amet anim consectetur ullamco qui sit aute ex ullamco sit. Dolor
            amet id exercitation nulla. Minim irure ea labore nulla. Occaecat
            culpa nostrud voluptate sint reprehenderit pariatur.
          </p>

          <button>Start Eating Well</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
