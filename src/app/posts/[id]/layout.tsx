import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '../../../styles/globals.css'
import styles from '../../../styles/layout.module.css'
import utilStyles from '../../../styles/utils.module.css'

const name = 'Your Name'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

<>
<header className={styles.header}>
       
       <Image
         priority
         src="/images/profile.jpg"
         className={utilStyles.borderCircle}
         height={124}
         width={124}
         alt=""
       />
       <h3 className={utilStyles.headingXl}>{name}</h3>
 </header>
 {children}
  {(
   <div className={styles.backToHome}>
     <Link href="/">← Back to home</Link>
   </div>
 )} 
</>
  )
}
