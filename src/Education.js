import React, { Component } from 'react';
const Course = props => {
    return(
        <>
        <div className = 'course'>
            <div className = 'courseHeader'>
                <h1 className = 'course__title'>{props.title}</h1>
                <p className = 'course__author'>{props.author}</p>
                <p className = 'course__date'>{props.date}</p>
            </div>
            <div className = 'course__descript'>
                <div className = 'descript__txt'>{props.txt}</div>
                <div className = 'descript__tech'>{props.tech}</div>
            </div>
        </div>
        </>
    );
}
class Education extends Component {
    state = { 
        uniCourses: [
            {id: 1, title: 'Object-oriented programming', author: '',date: '2014 - 2016'},
            {id: 2, title: 'Database systems', author: '',date: '2016/17'},
            {id: 3, title: 'Introduction to R', author: '',date: '2017/18'},
            {id: 4, title: 'Visual Basic in Excel', author: '',date: '2017/18'},
            {id: 5, title: 'Drupal - Content Management System', author: '',date: '2018/19'},
        ],
        onlineCourses: [
            {id: 1, title: 'Websamuraj: Od podstaw do Front-end dewelopera', author: '',date: '2018/19'},
            {id: 2, title: 'Traversy Media YouTube', author: '',date: '2018/19'},
            {id: 3, title: 'DevTips YouTube', author: '',date: '2018/19'},
            {id: 4, title: 'The Net Ninja YouTube', author: '',date: '2018/19'},
            {id: 5, title: 'Samuraj Programowania YouTube', author: '',date: '2018/19'},
        ]
     }
    render() { 
        const {uniCourses, onlineCourses} = this.state;
        return ( 
            <>
            <div className="educationSection">
                <h1 className = 'education__title'>Education</h1>
                <h2 className="education__uni">University of Wrocław</h2>
                <h3 className="education__dep">Department of Mathematics & Informatics</h3>
                <p className="education__degree">Subject : Mathematics [BA]</p>
                <p className="education__degree">Subject : Mathematics [MA]</p>
                <p className="courses__title">University courses</p>
                {uniCourses.map(i => <Course key = {i.id} title = {i.title} txt = {i.txt} author = {i.author}
                date = {i.date} tech = {i.tech}/>)}
                 <p className="courses__title">Online courses</p>
                {onlineCourses.map(i => <Course key = {i.id} title = {i.title} txt = {i.txt} author = {i.author}
                date = {i.date} tech = {i.tech}/>)}
            </div>
            </>
         );
    }
}
 
export default Education;