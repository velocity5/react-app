import React, { Component } from 'react'
class About extends Component {
    render() { 
        document.title = "About"
        return ( 
            <div>
                <h2>Hello, About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse nam neque, quibusdam animi ab quae assumenda soluta maxime! Voluptates, vitae quis. In consequuntur dolores repellat atque perferendis voluptates quidem.</p>
            </div>
         );
    }
}
 
export default About;