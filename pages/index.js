import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>zach</title>
        <meta name="description" content="zach's page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>zach</h1>
        <h2 className={styles.description}>email: <i>contact at zachmeador dot com</i></h2>
      </main>
    </div>
  )
}
