import React from 'react'
import {Wrapper} from './Styles'
import '../App.scss'
import Me from '../assets/images/me-outside.jpg'
import SideBar from './SideBar';

const Home =()=>{
    return(
        <>
        
        {/* <img src={Me} data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"/> */}
            <SideBar/>
        <main>
            <h1>Clint Earl</h1>
            <p>Full Stack Developer</p>
            <p>Welcome to my portfolio. Explore and see some of the projects I've done.</p>
        </main>
        </>
    )
}

export default Home;