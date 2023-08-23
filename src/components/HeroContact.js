import React from 'react'
import Styles from './HeroContact.module.css'
import Link from 'next/link'

const HeroContact = () => {
  return (
    <div className={Styles.hero}>
      <div className='container'>
        <div className={Styles.hero_content}>
          <h2>¿Está buscando un experto en construcción?</h2>
          <button>
            <Link href={'/contacto'}>Solicitar presupuesto</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroContact