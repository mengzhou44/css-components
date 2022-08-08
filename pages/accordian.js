import Head from 'next/head';
import styles from './accordian.module.css';
import { useState } from 'react';

const Accordian = () => {
  const [expanded, setExpanded] = useState([]);

  const getItemClass = (id) => {
    if (expanded.includes(id)) {
      return `${styles.open} ${styles.item}`;
    }

    return styles.item;
  };

  const toggleExpanded = (id) => {
    let res = [...expanded];
    if (res.includes(id)) {
      res = res.filter((item) => item !== id);
    } else {
      res.push(id);
    }
    setExpanded(res);
  };

  return (
    <div>
      <Head>
        <title> Accordian</title>
      </Head>
      <div className={styles.accordian}>
        <div className={getItemClass(1)}>
          <p className={styles.number}>01</p>
          <p className={styles.text}>Where are these chairs assembled?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => toggleExpanded(1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className={styles.details}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium dolor at sequi obcaecati cupiditate. Voluptates
              repellendus cupiditate aperiam! Incidunt amet quo neque.
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div>
        <div className={getItemClass(2)}>
          <p className={styles.number}>02</p>
          <p className={styles.text}>How long do I have to return my chair?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => toggleExpanded(2)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className={styles.details}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium dolor at sequi obcaecati cupiditate. Voluptates
              repellendus cupiditate aperiam! Incidunt amet quo neque.
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div>
        <div className={getItemClass(3)}>
          <p className={styles.number}>03</p>
          <p className={styles.text}>
            Do you ship to countries outside the EU?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => toggleExpanded(3)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className={styles.details}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium dolor at sequi obcaecati cupiditate. Voluptates
              repellendus cupiditate aperiam! Incidunt amet quo neque.
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
