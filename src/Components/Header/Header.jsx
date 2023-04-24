import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="Main-head">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU" style={{maxHeight:"40px",marginLeft:"15px"}} alt="logo" />
                    <h2>Arc</h2>
                    <input type="search" placeholder='Search' style={{marginLeft:"45px",textItems:"center"}}/>
                </div>

                <ul >
                    <Link to="/store" style={{textDecoration:'none', color:'black'}}>
                    <li>Store</li>
                    </Link>
                    <li>More</li>
                </ul>

            </div>

        </>
    )
}

export default Header
