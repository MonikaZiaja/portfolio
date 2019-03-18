import React, { Component } from 'react';
import photoMe from './img/me.JPG'; // with import

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
                    Hi! I am Monika. <br/> <br/>
                    I am a passionate beginner web developer and student of mathematics 
                    I am crazy about programming and coding.
                    </p>
                    {
                        show ?
                        <>
                    <p className = 'descript__txt--aboutMe'>
                    I am a person who loves a combination of logic and art with a predominance of logic.  
                    One of my lecturers says that mathematician is not a job is a way of being. 
                    For me studying mathematics are a great adventure and tough experience. 
                    During these studies, I have learned not only how to solve mathematician problems but primarily how to think in a critical and logical way. 
                    I also learnt patient and conscientious work.
                    </p>
                    <p className = 'descript__txt--aboutMe'>
                    Sometimes people think that I am a perfectionist but I am not. 
                    However in my opinion, if you do something you should do it well. 
                    I work passionately. I always try to find something that I love about my task. It makes me a better construction, because then I truly enjoy my work and I do not feel overwhelmed. 
                    </p>
                    <p className = 'descript__txt--aboutMe'>
                    Another essential thing is to be organized. Firstly I always set my main yearly goals, then I think what I have to do to achieve them. I make a plan for upcoming months, weeks and days. I also write down the first needed step. Then I can see why it is important to keep all task each day. 
                    I can not live without challenges and the most I appreciate constructive criticism because then I can see that someone really pay attention to what I am doing. Only then I can learn something.
                   </p>
                   </>
                    
                :null
                }
                    <div className = 'descript__btns--aboutMe'>
                    <a href='./img/CVDev.pdf' download>
                     
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