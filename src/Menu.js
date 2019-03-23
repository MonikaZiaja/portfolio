import React, { Component } from 'react';
import pdf from './img/CVDev.pdf';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBars, FaTimes } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';
// import './menu.css';

const Li = props => {
    return(
        <li className = {props.class} key = {props.id} active = {props.active} onClick = {props.click}>
     {props.name}</li>
    )
}
const Circle = props => {
    return(
        <div className = {props.class} key = {props.id} active = {props.active} onClick = {props.click}></div>
    )
}
class Menu extends Component {
    state = {  
        menu:[
        {id:1, name:'Home', active:true, to: 'home'},
        {id:2, name:'About me', active:false, to: 'aboutme'},
        {id:8, name:'Projects', active:false, to:'projects'},
        {id:3, name:'Skills & Abilities', active:false, to:'skills'},
        // {id:5, name:'Front-end Dev', active:false},
        // {id:6, name:'Data Scientist', active:false},
        // {id:7, name:'Mathematician', active:false},
        {id:4, name:'Work experience', active:false, to: 'work'},
        {id:9, name:'Education', active:false, to: 'education'},
        {id:10, name:'Contact', active:false, to:'contact'},
        ],
        isMobileMenuActive: true
    }
    handleActiveMenuItem = circle => {
        this.state.menu.forEach(item => {
            item.active = false
        });
        this.setState(prevState => ({
            menu: prevState.menu.map(
                item => (item.id === circle.id) ? Object.assign(item, {
                    active: true
                }) : item
            )
        }));
        if (this.props.onMenuClick) {
            this.props.onMenuClick(circle.to);
        }
    }
    handleMenuTransform = () => {
        this.setState({
            isMobileMenuActive: !this.state.isMobileMenuActive
        })
    }
    render() { 
        const {menu, isMobileMenuActive} = this.state
        return ( 
            <>
            <div className = 'firstHeader' onClick = {this.handleMenuTransform}>
            <div className='firstHeader--myName'>Monika Ziaja</div>
            {isMobileMenuActive ? <FaBars /> 
            :
            <> 
            <FaTimes/>
            <ul className = 'mainMenuMobile'>
                {menu.map(li => <Li class = {li.active ? 'mainMenu__item active' : 'mainMenu__item'} id = {li.id} click = {this.handleActiveMenuItem.bind(this, li)} name = {li.name} to = {li.to}/>)}
                
            </ul>
            </>
            }</div>
            <ul className = 'mainMenu'>
                {menu.map(li => <Li class = {li.active ? 'mainMenu__item active' : 'mainMenu__item'} id = {li.id} click = {this.handleActiveMenuItem.bind(this, li)} name = {li.name} to = {li.to}/>)}
                
                <a href={pdf} download>
                <li className='mainMenu__item--CV'>
                    Download CV
                </li>
                    </a>
            </ul>
            <div className = 'menuCircles'>
            {menu.map(circle => <Circle class = {circle.active ? 'circle active':'circle'} id = {circle.id} active = {circle.active} click = {this.handleActiveMenuItem.bind(this, circle)}/>)}
            </div>
            </>
         );
    }
}
 
export default Menu;