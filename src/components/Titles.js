import React from 'react';

class Titles extends React.Component {
    
    render() { 
        return ( 
            <div>
                <h1 className ="title-container__title">Your Weather</h1>
                <p className="title-container__subtitle"> Temperature , condition , humidity and more...</p>
            </div>
         );
    }
}
 
export default Titles;