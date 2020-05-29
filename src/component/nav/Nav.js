import React, { useState, useEffect } from 'react'
import  logo from '../../assets/img/home-15.png'

import    './css/nav.css'
const Nav = ( ) => {
    const  [ menu, setMenu ] = useState([
        'home',
        'why us',
        'features',
        'articles',
        'pricing'
    ])
    const [ isMovMenuOpen, setIsMovMenuOpen ] = useState(false)
    const ulStyle = isMovMenuOpen ? 'flex' : 'none'

    return(
      <>
        <nav className='nav'>
                <div className='logo'>
                    <img src= {logo} alt="logo" />
                    <h1 className='logo-name'>
                        misocial
                    </h1>
                </div>

                {/* desktop menu */}
                <div className='des-menu'>
                    <ul className='des-menu-items'>
                       {menu.map((m) =>{
                           return (
                            <li className='des-menu-item'>
                                <a className='des-menu-link'>
                                    {m}
                                </a>
                            </li>
                           )
                       })}
                       <li className='des-menu-btn'>
                           get  started
                       </li>
                    </ul>
                </div>

                <div className={isMovMenuOpen ? 'menu-toggle animated-line' : 'menu-toggle'} onClick={() => setIsMovMenuOpen(!isMovMenuOpen)}>
                    <div className='line line-1'></div>
                    <div className='line line-2'></div>
                    <div className='line line-3'></div>
                </div>
        </nav>
        {/* movile menu */}
        <div className={isMovMenuOpen ? 'mob-menu open' : 'mob-menu'} style={{display : 'flex'}}>
            <ul className='mob-menu-items' style={{display : ulStyle}}>
                 {menu.map((m) =>{
                     return (
                      <li className='mob-menu-item'>
                          <a className='mob-menu-link'>
                              {m}
                          </a>
                      </li>
                     )
                 })}

            </ul>
        </div>
      </>
    )
}

export default Nav
