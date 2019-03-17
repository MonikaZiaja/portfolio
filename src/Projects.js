import React, { Component } from 'react';
import project1 from './img/projects/p1.png' // with import
import project2 from './img/projects/p2.png' // with import
import project3 from './img/projects/p3.jpg' // with import
import project4 from './img/projects/p4.png' // with import
import project5 from './img/projects/p5.png' // with import
import project6 from './img/projects/p6.png' // with import
import project7 from './img/projects/p7.png' // with import
import project8 from './img/projects/p8.png' // with import

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Project = props => {
    return(
        <>
        <div className = 'project'>
            <div className = 'project__img'>
                <img src = {props.img} className = 'img__prtsc'></img>
                <div className = 'img__hover'>
                    <a className = 'hover__btn' href={props.hrefCode}>code</a>
                    <a className = 'hover__btn' href={props.href}> www</a>
                    <FontAwesomeIcon icon='github' className="skillFont"/>
                </div>
            
            </div>
            <div className = 'project__descript'>
                <h1 className = 'descript__title'>{props.title}</h1>
                <p className = 'descript__txt'>{props.txt}</p>
            </div>

        
        </div>
        </>
    )
}
class Projects extends Component {
    state = { 
        projects:[
            {id: 1, img: project1, title:'Data Science', 
            href:'https://monikaziaja.github.io/Data-Science/' ,
            hrefCode:'https://github.com/MonikaZiaja/Data-Science' ,
            txt:'Page under construction represents the new specialisation at Univercity of Wroclaw.'}
            ,{id: 2, img: project2, title:'Spinners&Loaders', 
            href:'https://monikaziaja.github.io/Spinners/' ,
            hrefCode:'https://github.com/MonikaZiaja/Spinners' ,
            txt:'Some idea of spinners and loaders. The number of projects will increase.'}
           ,{id: 7, img: project7, title:'KNZM', 
           href:'http://knzm.math.uni.wroc.pl/#/' ,
           hrefCode:'https://github.com/MonikaZiaja/KNZM' ,
            txt:'Page under construction for the students scientific association KNZM.'}
            ,{id: 8, img: project8, title:'Add number', 
            href:'https://monikaziaja.github.io/projectXS--addNumber/' ,
            hrefCode:'https://github.com/MonikaZiaja/projectXS--addNumber' ,
            txt:'Project is just a form of exercise.'}
            ,{id: 3, img: project3, title:'Exchange counter', 
            href:'https://monikaziaja.github.io/exchangeCounter/' ,
            hrefCode:'https://github.com/MonikaZiaja/exchangeCounter' ,
            txt:'Project is just a form of exercise.'}
            ,{id: 4, img: project4, title:'Count clicks', 
            href:'https://monikaziaja.github.io/click--counter/' ,
            hrefCode:'https://github.com/MonikaZiaja/click--counter' ,
            txt:'Project is just a form of exercise.'}
            ,{id: 5, img: project5, title:'Blog', 
            href:'https://monikaziaja.github.io/onePage--lifeStyle/' ,
            hrefCode:'https://github.com/MonikaZiaja/onePage--lifeStyle' ,
            txt:'Project is just a form of exercise.'}
            ,{id: 6, img: project6, title:'Page split', 
            href:'https://monikaziaja.github.io/onePage--3split/' ,
            hrefCode:'https://github.com/MonikaZiaja/onePage--3split' ,
            txt:'Project is just a form of exercise.'}
        ]
     }
    render() { 
        const {projects} = this.state
        return (  
            <div>
                <h1 className="projects__title">My projects</h1>
                <p className="projects__txt--intro">Here are some of my projects. <br/> Most of them 
                are under construction. </p>
                {projects.map(project => <Project hregCode = {project.hrefCode} href = {project.href} img = {project.img} title = {project.title} txt = {project.txt}/>)}
            </div>
        );
    }
}
 
export default Projects;