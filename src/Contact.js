import React, { Component } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLaptop, FaArrowRight} from 'react-icons/fa';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const ContactItem = (props) => {
    return(
    <>
        
        <div className="contactItem">
            {/* <button className="contactItem__font" onClick = {props.onclick}>{props.font}</button> */}
            <CopyToClipboard text={props.text}>
                <button title="Click to copy" className="contactItem__font" onClick = {props.onclick}>{props.font}</button>
            </CopyToClipboard>
            {/* {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null} */}
        </div>
    </>
    );
}
 class Contact extends Component{
     state = {
         contactData:[
             {id:1, font: <FaPhone/>, data: '691 026 848' },
             {id:2, font: <FaEnvelope/>, data: 'ziaja.monika@mail.com' },
             {id:4, font: <FaGithub/>, data: 'github.com/MonikaZiaja'},
            //  {id:3, font: <FaLaptop/>, data: 'monikaziaja.github.io/portfolio/' },
         ],
         copySuccess: '',
        //  value: 'ula',
         copied: false,

     }
     handleCopyToClipboard = (e) => {
        this.contactData.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
      }
      
     render(){
         const {contactData} = this.state;
         return(
             <>
             <div className="contactSection__callMe">
            <h1 className="contactSection__title--callMe">Do you want to know more?</h1>
            <h1 className="contactSection__title--callMe">Call me!</h1>
        </div>
           <h1 className="contact__title">Contact</h1>
                 <div className="contactSection">
                {contactData.map(item => <ContactItem key = {item.id} 
                text={item.data}
                font = {item.font}/>)}
                {this.state.copySuccess}
             </div>
            
             </>
         )

     }
     
 }

 export default Contact;

