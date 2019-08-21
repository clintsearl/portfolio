import React from 'react'
import {RDate, RDescription, RHeading, RSubHead, RTitle, RWrapper} from './Styles'
import '../App.scss'
const AboutMe =()=>{
    return(
        <main className="resume">
    <h1>Little Bit About Me</h1>
    <h2>Skills</h2>
    <ul>
        <li>JavaScript</li>	
        <li>React</li>	
        <li>Node</li>	
        <li>Express</li>	
        <li>HTML</li>	
        <li>React Native</li>	
        <li>RESTful APIs</li>	
        <li>CSS</li>	
        <li>MongoDB</li>
        <li>RESTful APIs</li>
        <li>Git</li>	
        <li>GraphQL</li>
    </ul>

	<RHeading>Projects</RHeading>
	<RSubHead>Larry H. Miller Sports Entertainment Group | Salt Lake City UT </RSubHead>
        <RTitle>Web Development Intern</RTitle> 
    <RDate>March 2019 – May 2019</RDate>
		React Native |GraphQL |GitLab
<RDescription>Agile development of the Utah Stars app.  Integrated the React Native app with GraphQL API, pulling data into the app and display it on the homepage. Wrote a portion of the GraphQL API to pull data from a REST API.</RDescription>
<RSubHead>Backpacking Gear Database</RSubHead>
https://hiking-gear.herokuapp.com/ 
<RDate>April 2019</RDate>
React | Node | Express | MongoDB                    
<RDescription>Designed and developed a clean mobile responsive app to track backpacking gear. Continuous integration of React front end. Created the REST API that stores the data on MongoDB. Currently learning Selenium in python to automate testing.</RDescription>
<RHeading>Experience</RHeading>
<RSubHead>E Knowledge Solutions | Layton, UT</RSubHead>	
<RDate>April 2019 – Present</RDate>
	<RTitle>Freelance Project</RTitle>
		React | Styled Components
	<RDescription>Creating and implementing a professional website to represent their company. The website is to promote their courseware development product increasing awareness of the company and giving potential customers information needed in a mobile responsive simple to navigate way.</RDescription>

<RSubHead>Autoliv Inc |Ogden UT</RSubHead>
<RDate>August 2013 – February 2019</RDate>
<RTitle>Training Associate 4</RTitle>
<RDescription>Using Kanban methodology, our team ramped up production on a new line 66% to reach customers needs. Certified as an Autoliv Maintenance First Responder.</RDescription>
<h2>Education</h2>
<RTitle>Helio Training | Salt Lake City, UT</RTitle>
<RDate>February 2019 – May 2019</RDate>
<RDescription>Full-stack Web Development</RDescription>
<RDescription>Certification of Skills Proficiency</RDescription>
	<RTitle>Davis Technical College | Kaysville, UT	</RTitle>
    <RDate>February 2018 - September 2018</RDate>
    <RDescription>Introduction to Software Development Program</RDescription>
<RTitle> Brigham Young University Idaho | Rexburg, ID</RTitle>
<RDate>June 2006 – July 2013</RDate>
<RDescription>Bachelor of Science Emphasis in Human Biology and Minor in Chemistry</RDescription>

    </main>
    )
}

export default AboutMe;