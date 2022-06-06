import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyle from "../styles/utils.module.css"
import Link from 'next/link'
import Layout,{siteTitle} from '../components/Layout'

import {getPostsData} from "../lib/post"
//SSGの場合
//getStaticProps・・・Next.jsの関数、外部から一度だけデータをもってくる
export async function getStaticProps(){
  const allPostsData = getPostsData();
  //console.log(allPostsData)
  return{
    props:{
      allPostsData,
    },
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyle.headingMd}>私はフロントエンドエンジニアです。</p>
      </section>
      
      <section>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}/`}>
              <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className={utilStyle.boldText}>{title}</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>{date}</small>
          </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
