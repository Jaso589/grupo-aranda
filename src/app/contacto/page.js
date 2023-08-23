import React from 'react'
import Styles from './page.module.css'
import BgPage from '@/components/BgPage'
import { metadata } from '../layout'
import HeroContact from '@/components/HeroContact'

const Contacto = () => {
  metadata.title = 'Grupo Aranda | Contacto'
  return (
    <>
      <section className={Styles.contact_header}>
        <BgPage/>
      </section>
      <section className={Styles.contact_data}>
        <div className='container'>
          <div className={Styles.data}>
            <ul>
              <h3>Dirección</h3>
              <li>6391 Elgin St. Celina, Delaware 10299</li>
            </ul>
            <ul>
              <h3>Teléfono y correo</h3>
              <li>(217) 555-0113</li>
              <li>willie.jennings@example.com</li>
            </ul>
            <ul>
              <h3>Horario</h3>
              <li>8:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={Styles.form_container}>
        <div className='container'>
          <div className={Styles.form_content}>
            <div className={Styles.form_div}>
              <h2>Cotiza tu proyecto</h2>
              <p>Llame o envíe un formulario de contacto, estaremos encantados de ayudarle</p>
              <form>
                <label htmlFor='razon'>
                  <input id='razon' name='razon' type='text' placeholder='Razon social*'/>
                </label>
                <label htmlFor='ruc'>
                  <input id='ruc' name='ruc' type='text' placeholder='Numero de RUC*'/>
                </label>
                <label htmlFor='name'>
                  <input id='name' name='name' type='text' placeholder='Nombre y apellido*'/>
                </label>
                <label htmlFor='asunto'>
                  <textarea id='asunto' name='asunto' placeholder='Descrine tu requerimiento' />
                </label>
                <button type='submit'>
                  Solicitar presupuesto
                </button>
              </form>
            </div>
            <div className={Styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117866.64074947994!2d-77.00979944015528!3d-12.01907038442969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1692023840004!5m2!1ses-419!2spe" width="100%" height="100%"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto