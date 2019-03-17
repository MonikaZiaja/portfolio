import React, { Component } from 'react';
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
        {id:1, name:'Home', active:true},
        {id:2, name:'About me', active:false},
        {id:3, name:'Skills & Abilities', active:false, to:'/skills'},
        {id:4, name:'How I work', active:false},
        // {id:5, name:'Front-end Dev', active:false},
        // {id:6, name:'Data Scientist', active:false},
        // {id:7, name:'Mathematician', active:false},
        {id:8, name:'Projects', active:false, to:'/projects'},
        {id:9, name:'Education', active:false},
        {id:10, name:'Contact', active:false, to:'/contact'},
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
            <div className = 'firstHeader' onClick = {this.handleMenuTransform}>{isMobileMenuActive ? <FaBars/> : <FaTimes/>}</div>
            <ul className = 'mainMenu'>
                {menu.map(li => <Li class = {li.active ? 'mainMenu__item active' : 'mainMenu__item'} id = {li.id} click = {this.handleActiveMenuItem.bind(this, li)} name = {li.name} to = {li.to}/>)}
                <li className='mainMenu__item--me'>MonikaZiaja</li>
            </ul>
            <div className = 'menuCircles'>
            {menu.map(circle => <Circle class = {circle.active ? 'circle active':'circle'} id = {circle.id} active = {circle.active} click = {this.handleActiveMenuItem.bind(this, circle)}/>)}
            </div>
            </>
         );
    }
}
 
export default Menu;