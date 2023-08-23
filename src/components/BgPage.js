'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import Styles from '@/components/BgPage.module.css'
const BgPage = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter();
  const parts = pathname.split('/').filter(part => part !== ''); // Dividir la ruta en partes
  console.log(parts)

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
  
  return (
    <div className={Styles.bg_page}>
      <div className='container'>
        <div className={Styles.content}>
          <h1>{parts}</h1>
          <p><Link href={'/'}>Home / </Link><span>{parts}</span></p>
        </div>
      </div> 
    </div>
  )
}

export default BgPage