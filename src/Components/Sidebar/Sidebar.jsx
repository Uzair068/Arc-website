import React from 'react'
import './Sidebar.css'
// import MainArea from '../MainArea/MainArea'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className="main-side">
                <div className="sidelogo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU" style={{maxHeight:"40px",marginLeft:"15px"}} alt="its logo" />
                </div>
                <div className="list">
                    <ul>
                        <Link to='/' style={{textDecoration:'none'}}><li>Dashboard</li></Link>
                        <Link to='/assignment' style={{textDecoration:'none'}}><li>Assignments</li></Link>
                        <Link to='/team' style={{textDecoration:'none'}}><li>Team</li></Link>
                        <Link to='/about' style={{textDecoration:'none'}}><li>About</li></Link>
                        <Link to='/contact' style={{textDecoration:'none'}}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <button>Logout</button>
                </div>
            </div>
            {/* <MainArea/> */}

        </>
    )
}

export default Sidebar
