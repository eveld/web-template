import Head from 'next/head'
import styles from '../styles/Home.module.css'

import config from '../config'

export function getStaticProps() {
	return {
		props: {
      stage: config.stage,
      name: config.name,
      locale: config.locale
    },
	}
}

export default function Home({ stage, name, locale }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        

        <div className={styles.grid}>
          {stage != "live" &&
          <div>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>{locale}</p>
          </div>
          }

          {stage == "live" &&
          <div className={styles.card}>
            <h3>LIVE &rarr;</h3>
            <p>Show the livestream of the event.</p>
          </div>
          }

          <div className={styles.card}>
            <h3>About &rarr;</h3>
            <p>More information about the event?</p>
          </div>

          {stage == "cfp" &&
          <div className={styles.card}>
            <h3>Call for papers &rarr;</h3>
            <p>Send in your talks!</p>
          </div>
          }

          <div className={styles.card}>
            <h3>Footer &rarr;</h3>
            <p>Links to other stuff.</p>
          </div>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
