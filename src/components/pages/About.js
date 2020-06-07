import React from 'react'

const About = (props) => {
    return (
        <div>
            <h1 className="display-4 mb-3">Contact Manager</h1>
            <p className="Lead">Simple App to manage contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
            {console.log(props)}
        </div>
    );
}

export default About;
