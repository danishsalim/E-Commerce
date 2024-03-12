import React from 'react'
import './Home.css'
import {NavLink,useParams} from 'react-router-dom'
import { FaRegCirclePlay } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='home'>
        <div className='homeHeading'>
            <button>Get Your Latest Album</button>
            <button><FaRegCirclePlay /></button>
        </div>
        <h1>Tours</h1>
        <div className='homeBody'>
            <div className='toursDetail'>
                <ul>
                    <li>
                        <span>jul16</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <button>Buy Tickets</button>
                    </li>
                    <li>
                        <span>JUL19</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <button>Buy Tickets</button>
                    </li>
                    <li>
                        <span>jul26</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <button>Buy Tickets</button>
                    </li>
                    <li>
                        <span>jul28</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <button>Buy Tickets</button>
                    </li>
                    <li>
                        <span>aug6</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <button>Buy Tickets</button>
                    </li>
                    <li>
                        <span>aug16</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <button>Buy Tickets</button>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Home