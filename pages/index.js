import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>app</h1>
        </main>
      </div>
    </Layout>
  );
}
