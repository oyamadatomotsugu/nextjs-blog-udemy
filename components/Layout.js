import Head from "next/head";
import styles from './layout.module.css';
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Ko saido"

export const siteTitle = "next.js blog"

function Layout({children,home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src = "/images/profile.png" className = {utilStyles.borderCircle}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src = "/images/profile.png" className = {utilStyles.borderCircle}/>
            <h1 className={utilStyles.headingXl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <>
        <Link href="/">ホームに戻る</Link>
        </>
      )}
    </div>
  );
}

export default Layout;