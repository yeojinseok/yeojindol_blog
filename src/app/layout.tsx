import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/globals.css'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Your Name'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body> <div className={styles.container}>
      {children}
    </div></body>
    </html>
  )
}
