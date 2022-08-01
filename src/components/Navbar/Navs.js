import React, { Component } from 'react'
import {Menu} from './Menu'

class  Navbar extends Component{
    render(){
        return(
            <nav className='NavItems'>
                <h1>Trip To</h1>
                <div></div>
                <div>
                    <ul>
                    {Menu.map((item,index)=>{
                        
                        return(
                            <li key={index}><a className={item.cname} href={item.url}>{item.tname} </a></li>

                        )
                    })}
                        
                    </ul>
                </div>
            </nav>
        )
    }
}