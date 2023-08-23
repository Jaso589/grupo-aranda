import React from 'react'
import Styles from '@/components/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className='container'>
          <div className={Styles.footer_data}>
              <div className={Styles.footer_brand}>
                <h3>Grupo Aranda Constructores</h3>
                <p>Somos una empresa peruana especializada en el desarrollo de proyectos multidisciplinarios integrando arquitectura, ingeniería y construcción.</p>
              </div>
              <div>
                <h3>Enlaces del sitio</h3>
                <ul>
                  <li><Link href={'/'}>Inicio</Link></li>
                  <li><Link href={'/'}>Nosotros</Link></li>
                  <li><Link href={'/'}>Proyectos</Link></li>
                  <li><Link href={'/'}>Servicios</Link></li>
                  <li><Link href={'/'}>Contacto</Link></li>
                </ul>
              </div>
              <div>
                <h3>Servicios</h3>
                <ul>
                  <li><Link href={'/'}>Obras industriales</Link></li>
                  <li><Link href={'/'}>Habilitaciones urbanas</Link></li>
                  <li><Link href={'/'}>Edificaciones inmobiliarias</Link></li>
                  <li><Link href={'/'}>Reforzamiento de estructuras</Link></li>
                </ul>
              </div>
              <div>
                <h3>Contacto</h3>
                <ul>
                  <li>sara.cruz@example.com</li>
                  <li>4140 Parker Rd. Allentown, New Mexico 31134</li>
                  <li>(505) 555-0125</li>
                </ul>
              </div>
          </div>
          <div>
            <p>
            © Grupo Aranda Constructores 2023 - <Link href={'https://www.creativevisual21.com/'} target='_blank' rel='noopener noreferrer'>Creative Visual</Link>
            </p>
          </div>
      </div>
    </div>
  )
}

export default Footer