import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Anex jerin</title>
      </Head>
      <div className={styles.content}>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          fugit ratione exercitationem consequuntur deleniti quo suscipit
          doloribus assumenda natus, enim distinctio incidunt sunt, aliquam
          facilis praesentium quas doloremque delectus!
        </p>
      </div>
    </>
  );
}
