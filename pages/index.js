import Head from 'next/head'
// import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment className={styles.container}>
      <Head>
        <title>Parivest | Dashboard</title>
        <meta name="description" content="Parivest users Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Dashboard />
      </main>
    </Fragment>
  )
}
