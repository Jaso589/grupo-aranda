import BgPage from '@/components/BgPage'
import React from 'react'
import Styles from '@/app/nosotros/page.module.css'
import Image from 'next/image'
import { metadata } from '../layout'
import HeroContact from '@/components/HeroContact'

const team = [
  {
    img: '/people/person1.jpg',
    name:'Miguel Aranda',
    job:'Ingeniero 1'
  },
  {
    img: '/people/person2.jpg',
    name:'Alice Saavedra',
    job:'Ingeniero 2'
  },
  {
    img: '/people/person3.jpg',
    name:'Robert Orellana',
    job:'Ingeniero 3'
  }
  
]
const Nosotros = () => {
  metadata.title = 'Grupo Aranda | Nosotros'
  return (
    <>
    <section className={Styles.bg_page}>
      <BgPage/>
    </section>
    <section className={Styles.valores_container}>
      <div className='container'>
        <div className={Styles.valores}>
          <div className={Styles.valor}>
            <h2>La empresa</h2>
            <p>Somos un experimentado equipo de ingenieros, arquitectos y técnicos, ampliamente capacitados. Nos mantenemos a la vanguardia de la tecnología y llevamos a cabo el desarrollo de proyectos de acuerdo a normas y reglamentos vigentes. Por eso, estamos en la capacidad de garantizar a todos nuestros clientes un servicio de calidad con tecnología de vanguardia y un capital humano de primer nivel.</p>
            <p>Somos una empresa integral de capital y talento peruano, dedicada a la implementación de todas las especialidades de ingeniería, así como el mantenimiento preventivo – correctivo de instalaciones y equipamientos.</p>
          </div>
          <div className={Styles.valor}>
            <h2>Misión</h2>
            <p>Somos una constructora que prioriza la satisfacción de nuestros clientes, colaboradores y accionistas a través de nuestro profesionalismo, ética, calidad, respeto al medio ambiente y actividades sociales.</p>
          </div>
          <div className={Styles.valor}>
            <h2>La empresa</h2>
            <p>Ser una empresa reconocida a nivel nacional por su competitividad, modelo de gestión y por su capacidad para satisfacer las necesidades de sus clientes, accionistas y colaboradores.</p>
          </div>
        </div>
      </div>
    </section>
    <section className={Styles.team_container}>
      <div className='container'>
        <h2>Nuestro equipo</h2>
        <div className={Styles.team}>
          {
            team.map((a)=>(
              <div className={Styles.team_card} key={a.name}>
                <Image
                  src={a.img}
                  alt={a.name}
                  fill
                />
                <div className={Styles.card_data}>
                  <p>{a.name}</p>
                  <p>{a.job}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
    <HeroContact/>
    </>
  )
}

export default Nosotros