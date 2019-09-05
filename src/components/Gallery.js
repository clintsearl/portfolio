import React from 'react'
import '../App.scss'




const items =[
    {
        name: "Hiking Database",
        url: "https://hiking-gear.herokuapp.com/",
        discription:"This is a full stack app ",
        photo:"",
        urlcode:""
    },
    {
        name: "Utah Stars App",
        url: "",
        discription:"",
        photo:"",
        urlcode:""
    },
    {
        name: "E Knowledge Solutions",
        url: "",
        discription:"",
        photo:"",
        urlcode:""
    },
    {
        name: "Nasa Picture of the Day",
        url: "",
        discription:"",
        photo:"",
        urlcode:""
    },

]

const Gallery =()=>{
    return(
        <div className="gallery">
            <h1>Projects</h1>
            {items.map((item, number)=>
               ( <div className="project" key= {number}>
                   <h2> {item.name}</h2>
                   <img src={item.photo}></img>
                   <p>{item.discription}</p>
                   <button href={item.urlcode}>Code</button>
                   
                </div>)
            )
        }        

    </div>
    )
}

export default Gallery;