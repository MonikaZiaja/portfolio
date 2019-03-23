import React, { Component } from 'react';
import photoMe from './img/me.JPG'; // with import
import pdf from './img/CVDev.pdf';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedinIn,FaAngleDoubleDown, FaArrowDown} from 'react-icons/fa';
class AboutMe extends Component {
    state = { 
        show:false,
     }
    handleHideOnClick = () => {
       this.setState({
           show : !this.state.show
        })
        console.log(this.state.show)
    }
    render() { 
      const {show} = this.state
        return ( 
            <>
            <section className = 'aboutMe'>
                <div className = 'aboutMe__box--img'>
                    <img className = 'aboutMe__img' src = {photoMe}></img>
                </div>
                <div className = 'aboutMe__box--descript'>
                    <h1 className = 'descript__title--aboutMe'>About me</h1>
                    <p className = 'descript__txt--aboutMe'>
                    Hi! I am Monika.
                    I am a passionate beginner web developer and student of mathematics.
                    I am crazy about programming and coding.
                    </p>
                    {
                    show ? null :
                    <button onClick = {this.handleHideOnClick.bind(this)}  className="arrowDown--aboutMe">
                    <FaAngleDoubleDown/>
                    </button>
                    }
                    {
                        show ?
                        <>
                    <h1 className="descript__txtTitle--aboutMe">Why maths?</h1>
                    <p className = 'descript__txt--aboutMe'>
                    One of my lecturers always says that ``Mathematician is not a job, it is a way of being." 
                    and I totally agree with him, studying mathematics is a great adventure and tough 
                    experience. During these studies I have learned not only how to solve mathematician 
                    problems but primarily how to think abstractly and logically. I have also learned patience and conscientious work.</p>
                    <h1 className="descript__txtTitle--aboutMe">How do I work?</h1>
                    <p className = 'descript__txt--aboutMe'>Whatever I do, not only at work, I always follow these rules:
                    <br/> <br/> 
                    <strong> Try to find something that I love about my task.</strong>
                    <br/> <br/> 
                    It makes me a better constructionist, I work passionately and truly enjoy my assignments.
                    <br/> <br/> 
                    <strong> Try to deliver ready to use product.</strong>
                   <br/> <br/> 
                    My priority is to keep deadlines. Firstly I design and implement a minimalistic version of a project and after that I can add improvements.
                    <br/> <br/> 
                    <strong>If you do something you should do it well.</strong>
                    <br/> <br/> 
                    I am self-responsible but I've also learned to ask others, about their ideas, 
                    their experience and share the knowledge between coworkers. This comes always 
                    with great benefits for me and for the projects we're working on.
                    <br/> <br/> 
                    </p>
                    <h1 className="descript__txtTitle--aboutMe">How do I develop my programming skills?</h1>
                    <p className = 'descript__txt--aboutMe'>
                    <br/> <br/> 
                    <strong>My projects</strong>
                    <br/> <br/> 
                    I design my own projects and assign myself tasks.
	When I encounter a problem I try to resolve it by doing research
    I also like to ask my more experienced friends for tasks and project ideas, as I benefit from their knowledge and can always expect constructive criticism.<br/> <br/> 
                    <strong>Courses</strong>
                    <br/> <br/> 
                    I practise an effective method. Firstly I read or watch a lesson. Then I try to do the excerices from the course without any help and compare my results with course materials.
                    In the end I try to work on something different, covering the same areas to practice gained knowledge. In the last step I often design and develop small websites or apps.
                   
                    </p>
                    
                   </>
                    
                :null
                }
                    <div className = 'descript__btns--aboutMe'>
                    <a href={pdf} download>
                     
                    <button className = 'descript__btn--aboutMe'>Download CV</button>
                    </a>
                    <a href = 'https://www.linkedin.com/in/monika-ziaja-6a8146161/'> <button className = 'descript__btn--aboutMe'>Contact me</button></a>
                {
                    show ? 
                    <button className = 'descript__btn--aboutMe' onClick = {this.handleHideOnClick.bind(this)} >Read less</button>
                    :
                    <button className = 'descript__btn--aboutMe' onClick = {this.handleHideOnClick.bind(this)} >Read more</button>
                }
                    </div>
                </div>
            </section>            
            </>
         );
    }
}
 
export default AboutMe;