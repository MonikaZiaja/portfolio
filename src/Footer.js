import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className = 'mainFooter'>
                Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2019  by Monika Ziaja. Created by Monika Ziaja.
                </div>
            </>
         );
    }
}
 
export default Footer;