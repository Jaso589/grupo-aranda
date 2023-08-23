'use client'
import Link from 'next/link'
import React from 'react'
import styles from '@/components/Navbar.module.css'
import { usePathname, useRouter } from 'next/navigation'

const estilo  = {
  // borderBottom: 'solid 5px #00EE9A',
  color:'#F3BE2A'
}

export const ActiveLink = ({text, href}) => {
  const pathname = usePathname()
    console.log(pathname)
  return (
    <>
    <Link className={styles.link_nav} key={text} href={href} style={pathname=== href ? estilo : null}>{text}</Link>
    </>
  )
}
