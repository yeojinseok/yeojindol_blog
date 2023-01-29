
import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from './components/Data'
import RootLayout, { siteTitle } from './layout'
import styles from '../styles/layout.module.css'
import Image from 'next/image'

export async function getData() {
  const allPostsData = getSortedPostsData()

  console.log(allPostsData, '나와라얍')

  return allPostsData
}

export default async function Home() {

  const allPostsData = await getData()

  console.log(allPostsData, 'jinijijij')

  return (

      <>
    <header className={styles.header}>   
       <Image
         priority
         src="/images/profile.jpg"
         className={utilStyles.borderCircle}
         height={140}
         width={140}
         alt=""
       />
       <h1 className={utilStyles.heading2Xl}>{'jinseok'}</h1>
 </header>
        <div className={utilStyles.headingMd}>
          <p>안녕하세요. 여진석입니다.</p>
        </div>
        <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Post</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </>

  )
}
