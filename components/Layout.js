import Head from 'next/head';
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  title: 'Next.js App',
  description: 'Next.js app starter code',
  keywords: 'nextjs, starter',
};
