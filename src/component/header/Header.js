import React  from 'react'
import Nav from '../nav/Nav';
import { FiArrowDown } from 'react-icons/fi'

import './css/header.css'

const Header = ( ) => {
    return(
        <header>
                <Nav></Nav>
                <div className='hero-actions'>
                        <div className='sec-heading' style={{textTransform: 'uppercase'}}>
                                <h3> social marketing &#38;	analytics</h3>
                        </div>
                        <div className='pri-heading'>
                                <h1>
                                        Take control of your data
                                </h1>
                        </div>

                        <div className='hero-para'>
                                <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </p>
                        </div>

                        <div className='hero-btn-section'>
                                    <button className='btn blue-btn'>
                                                get started
                                    </button>

                                    <button className='btn green-btn'>
                                                explore features
                                    </button>
                        </div>
                </div>

                <div className='down-btn'>
                    <FiArrowDown style={{transform:'rotate(45deg)'}}/>
                </div>
        </header>
    )
}

export default Header
