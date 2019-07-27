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
            <HeadH1>This is me</HeadH1>
        </SideHeading>
        
    )
}

export default SideBar;
