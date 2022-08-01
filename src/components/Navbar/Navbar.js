import React, { Component } from 'react'
import  menuItems  from './Menu'
import './Nav.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='Navigation'>
                <h1 className='logo-holder'>Trip To</h1>
                <div></div>
                <div>
                    <ul className='navmenu'>
                        {menuItems.map((item, index) => {

                            return (
                                <li key={index}><a className={item.cname} href={item.url}>{item.tname} </a></li>

                            )
                        })}

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar