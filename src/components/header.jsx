import React from 'react'
import Navbar from './Navbar'
import Landing from './Landing'
import style from '../Styles/Header.module.css';

export default function Header() {
  return (
    <>
      <div id={style.header} style={{ position: "sticky" }}>
          <Navbar />
          <Landing />
      </div>
    </>
  )
}
