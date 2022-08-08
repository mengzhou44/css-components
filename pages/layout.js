import styles from './layout.module.css';
const Layout = () => {
  return (
    <div class={styles.layout}>
      <div class={styles.nav}>Nav</div>

      <div class={styles.main}>
        <div class={styles.header}>
          <nav class={styles.menu}>
            <li>New </li>
            <li>Rely </li>
            <li>Forward </li>
            <li>Mark Unred</li>
          </nav>
          <button class={styles.button}>Trash</button>
        </div>
        <div class={styles.content}>
          <div class={styles.emails}>
            <div class={styles.email}>Email 1</div>
            <div class={styles.email}>Email 2</div>
            <div class={styles.email}>Email 3</div>
            <div class={styles.email}>Email 4</div>
            <div class={styles.email}>Email 5</div>
            <div class={styles.email}>Email 6</div>
            <div class={styles.email}>Email 7</div>
            <div class={styles.email}>Email 8</div>
            <div class={styles.email}>Email 9</div>
          </div>
          <div class={styles.view}>email views</div>
          <div class={styles.info}>Additial Info</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
