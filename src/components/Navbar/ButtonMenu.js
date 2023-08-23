'use client'
import React, { useState } from 'react'
import Styles from '@/components/Navbar.module.css'

export const ButtonMenu = ({accion, estado}) => {
  console.log(estado)
  return (
    <div>
      <button onClick={accion} className={Styles.btn_menu} >
        <div className={Styles.btn_burguer} style={estado ? {display: 'none'} : null }>
          <span></span><span></span><span></span>
        </div>
        <div className={Styles.btn_close} style={estado ? null : {display: 'none'}}>
          <span></span>
          <span></span>
        </div>
        </button>
    </div>
  )
}
