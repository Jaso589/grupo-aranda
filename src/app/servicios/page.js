import BgPage from '@/components/BgPage'
import React from 'react'
import Styles from '@/app/servicios/page.module.css'
import Image from 'next/image'
import { metadata } from '../layout'
import HeroContact from '@/components/HeroContact'

const services = [
  {
    icon:'/svg/services1.svg',
    title:'Obras industriales',
    href:''
  },
  {
    icon:'/svg/service2.svg',
    title:'Edificaciones inmobiliarias',
    href:''
  },{
    icon:'/svg/service3.svg',
    title:'Habilitaciones urbanas',
    href:''
  },
  {
    icon:'/svg/service4.svg',
    title:'Reforzamiento de estructuras',
    href:''
  }
]
const Servicios = () => {
  metadata.title = 'Grupo Aranda | Servicios'
  return (
    <>
      <section className={Styles.header_page}>
        <BgPage/>
      </section>
      <section className={Styles.services_container}>
        <div className='container'>
          <h2>Desarrollamos proyectos de acuerdo a normas y reglamentos vigentes para garantizar un servicio de calidad</h2>
          <div className='container'>
            <div className={Styles.services}>
              {
                services.map((a)=>(
                  <div key={a.title} className={Styles.service}>
                    <Image
                      src={a.icon}
                      alt={a.title}
                      width={70}
                      height={70}
                    />
                    <div>
                      <h3>{a.title}</h3>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <HeroContact/>
    </>
  )
}

export default Servicios