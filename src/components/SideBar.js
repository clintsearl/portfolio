import React from 'react'
import styled from 'styled-components'
import {SideHeading} from './Styles'

const HeadH1 = styled.h1`
    color:whitesmoke;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`

const SideBar =()=>{
    return(
        
        <SideHeading>
        <h1>Logo</h1>
            <ul className="nav">
            <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/aboutme">About Me</a></li>
            </ul>
            
        </SideHeading>
        
    )
}

export default SideBar;
