import styled from 'styled-components'
import tree from '../assets/images/treebg.jpg'

export const Wrapper = styled.div`
    padding-left:5%;
    margin-left:30vw;
    background-color:#ffffff;
    `
    export const SideHeading = styled.div`
    /* background-color:#003f3f; */
    background-image: url(${tree});
    background-position: right;
    background-size: cover;
    width:40vw;
    height:100vh;
    position:fixed;
    margin:0;
    display:flex;
    justify-content: flex-end;
    
`

// Resume page
export const RDate = styled.p`
    align-content:right;

`
export const RDescription = styled.p`
    padding:0 3%;

`
export const RHeading = styled.h1`

`
export const RSubHead = styled.h2`

`
export const RTitle = styled.h3`

`
export const RWrapper = styled.main`
    display:grid;
    align-content: start;
    text-align:left;
`