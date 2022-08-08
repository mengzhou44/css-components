import Link from 'next/link';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/accordian">Accordian </Link>
      <Link href="/carousel">Carousel </Link>
      <Link href="/table">Table </Link>
      <Link href="/hero">Hero </Link>
      <Link href="/layout">Layout </Link>
    </div>
  );
}
