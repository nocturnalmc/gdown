import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Gi-Ret 2.0</title>
        <meta
          name='description'
          content='One stop centre for all KKM Dental reporting'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>Gi-Ret 2.0</h2>
            <p className={inter.className}>
              Gi-Ret 2.0 is currently under maintenance
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
