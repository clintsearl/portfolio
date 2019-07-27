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
            <h1>Hello from Home</h1>
        
        </main>
        </>
    )
}

export default Home;