import React, { Component } from 'react';
import { FaStar} from 'react-icons/fa';
const SkillItem = (props) => {
    
    return(
        <div className = 'itemBoxSkill'>
            <p className="skill__name">{props.name}</p>
            <div className="skill__level">
                {[...Array(props.level)].map((e, i) => <FaStar className = 'skill__font--star'/>)}
            </div>
        </div>
    )
}
const AbilityItem = (props) => {
    
    return(
        <div className = 'itemBoxAbilities'>
        
            <p className="ablility__name">{props.name}</p>
        </div>
    )
}
class Skills extends Component {
    state = { 
        skills : [
            {id:1, name: 'HTML5', level: 4},
            {id:2, name: 'CSS3', level: 4},
            {id:3, name: 'JavaScript [ES6]', level: 2},
            {id:4, name: 'jQuery', level: 2},
            {id:5, name: 'React.js', level: 2},
            {id:6, name: 'R', level: 4},
            {id:16, name: 'C++', level: 1},
            {id:7, name: 'Drupal', level: 3},
            {id:8, name: 'WordPress', level: 3},
            {id:9, name: 'SASS & LESS', level: 3},
            {id:10, name: 'GIT', level: 3},
            {id:11, name: 'BEM', level: 4},
            {id:12, name: 'MySQL & PostgreSQL', level: 3},
            {id:13, name: 'MSO & LibreOffice', level: 5},
            {id:17, name: 'LaTeX', level: 5},
            {id:18, name: 'VBA in Excel', level: 3},
            {id:14, name: 'JIRA', level: 4},
            {id:15, name: 'SharePoint', level: 4},
        ],
        abilities : [
            {id:1, name: 'creativity'},
            {id:2, name: 'productivity'},
            {id:3, name: 'flexibility'},
            {id:4, name: 'open-mind'},
            {id:5, name: 'team work ability'},
            {id:6, name: 'stress resistance'},
            {id:7, name: 'analytical thinking'},
            {id:8, name: 'logical thinking'},
            {id:9, name: 'determination'},
            {id:10, name: 'regularity'},
            {id:11, name: 'independence'},
                
        ],
        languages:[
            {id:1, name: 'English', level: 4},
            {id:2, name: 'German', level: 1},
            {id:3, name: 'Spanish', level: 1},
        ]
     }
    render() { 
        const {skills, abilities, languages} = this.state;
        
        return ( 
            <>
                <div className = 'sectionSkills'>
                    <h1 className = 'sectionSkillsAbilities__title'>Skills</h1>
                    <div className = 'sectionSkills__list'>
                        {skills.map(item => <SkillItem 
                            key = {item.id} 
                            name = {item.name} 
                            level = {item.level}
                        />)}
                    </div>
                </div>
                <div className = 'sectionSkills'>
                    <h1 className = 'sectionSkillsAbilities__title'>Languages</h1>
                    <div className = 'sectionSkills__list'>
                        {languages.map(item => <SkillItem 
                            key = {item.id} 
                            name = {item.name} 
                            level = {item.level}
                        />)}
                    </div>
                </div>
                <div className = 'sectionAbilities'>
                    <h1 className = 'sectionSkillsAbilities__title'>Abilities</h1>
                    <div className = 'sectionAbilities__list'>
                        {abilities.map(item => <AbilityItem 
                            key = {item.id} 
                            name = {item.name} 
                        />)}
                    </div>
                </div>
            </>
        )
    }
}
 
export default Skills;