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
    /* display:flex; */
    align-content:right;

`
export const RDescription = styled.p`
    padding:0 3%;

`
export const RHeading = styled.h1`
 /* display:flex; */
 justify-content: flex-start;
 align-content:left;
 text-align:left;
`
export const RSubHead = styled.h2`
/* display:flex; */
`
export const RTitle = styled.h3`
/* display:flex; */

`
export const RWrapper = styled.div`
   margin:4%;

`