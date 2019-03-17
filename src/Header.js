import React, { Component } from 'react';
const Panel = props => {
    return(

        <div className = 'panel'>
        <h1 className = 'panel__title'>{props.title}</h1>
        <p className = 'panel_descript'>{props.txt}</p>
        <button className = 'panel__btn'>{props.btn}</button>
    </div>
    )

}
class Header extends Component {
    state = { 
        panels:[
            {id:1, title:'Front-end Dev'},
            {id:2, title:'Data Scientist'},
            {id:3, title:'Mathematician'},
        ]
     }
    render() { 
        const {panels} = this.state;
        
        return ( 
            <div className='mainHeader'>
                <div className = 'mainHeader__me'>
                    <h1 className = 'me__myName'>Monika Ziaja</h1>
                    <div className = 'me__prof'>
                        <h4 className = 'me__prof--dev'>Front-end Dev</h4>
                        <h4 className = 'me__prof--data'>Data Scientist</h4>
                        <h4 className = 'me__prof--math'>Mathematician</h4>
                    </div>
                </div>
                
                <div className = 'mainHeader__panels'>
                {/* {panels.map(panel => <Panel key = {panel.id} title = {panel.title} txt = {panel.txt} btn = {panel.btn}/>)} */}
                </div>
            </div>
         );
    }
}
 
export default Header;