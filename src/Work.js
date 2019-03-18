import React, { Component } from 'react';
class Work extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <h1 className="workExperienceSection__title">Work Experience</h1>
                <p className="workExperienceSection__txt">
                Until the last few months I thought that I was going to work as data scientist, so professional experience I was building in this field.
                </p>
                <div className="work">
                    <div className="work--1">
                        <p className="workTime">2017 - 2018</p>
                        <div className="workDescript">
                            <h1 className="workDescript__title">BZ WBK S.A.</h1>
                            <p className="workDescript__txt">
                                Create IT tools to streamline the process
                                development and evaluation of prediction models in R .<br/><br/>
                                Create prediction models and scoring cards
                                and reports.<br/><br/>
                                Working in teams with methodology Agile [SCRUM].<br/><br/>
                                Data analysis.<br/><br/>
                                Working with MySQL databases.
                            </p>
                        </div>
                    </div>
                    <div className="work--2">
                        <p className="workTime">2019</p>
                        <div className="workDescript">
                            <h1 className="workDescript__title">Univercity of Wroclaw</h1>
                            <p className="workDescript__txt">Designs, develops and relaunches responsive websites</p>
                        </div>   
                    </div>
                </div>
            </>
        );
    }
}
 
export default Work;