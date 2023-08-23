'use client'
import React, { useEffect, useState } from 'react'
import Styles from '@/components/Navbar.module.css'
import { ActiveLink } from './ActiveLink'
import NavbarLayout from './Layout'
import { ButtonMenu } from './ButtonMenu'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const navLinks = [
    {
        page:'Inicio',
        href:'/'
    },
    {
        page:'Nosotros',
        href:'/nosotros'
    },
    {
        page:'Proyectos',
        href:'/#proyectos'
    },
    {
        page:'Servicios',
        href:'/servicios'
    },
    {
      page:'Contacto',
      href:'/contacto'
    }
]

export const Navbar = ({headerPage}) => {
  const [page, setPage] = useState(true)
  const [btnMenu, setbtnMenu] = useState(false)
  const pathname = usePathname()
  
  const handleMenu = () =>{
    setbtnMenu(() => !btnMenu)
  }
  return (
    <NavbarLayout>
      <header className={pathname != '/' ? Styles.header_page : Styles.header}>
        <div className={Styles.container}>
          <div className={Styles.brand}>
            <Image
              src={'/GAC.svg'}
              width={120}
              height={120}
            />
          </div>
          <nav className={btnMenu? Styles.navbar: Styles.navbar_hide }>
            {
              navLinks.map((a)=>(
                <button onClick={() => {setbtnMenu(false)}} key={a.page}>
                  <ActiveLink text={a.page} href={a.href}/>
                </button>
              ))
            }
          </nav>
          <div className={Styles.menu}>
            <ButtonMenu accion={handleMenu} estado={btnMenu}/>
          </div>
        </div>
        
      </header>
    </NavbarLayout>
  )
}
