import React,{Component } from 'react';
import WebsiteCard  from './WebsiteCard';
import './webpage.css'



class Webpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            projects:[
                {id:1,title:"Yelp Camp", techStack:"Node.js, Express.js, Heroku", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", websiteLink:"https://dry-depths-69632.herokuapp.com/"},

                {id:2,title:"Fardah Roshan Academy", techStack:"Node.js, Express.js, Heroku", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", websiteLink:"https://pure-stream-44932.herokuapp.com/"},

                {id:3,title:"Coin-flipper Game", techStack:"Node.js, React.js, Heroku", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", websiteLink:"https://coin-flipper-game.herokuapp.com/"},

                {id:4,title:"Lottery Game", techStack:"Node.js, React.js, Heroku", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", websiteLink:"https://simple-lottery-app.herokuapp.com/"}
            ]
        }
    }

    render() { 
        const projects = this.state.projects.map(p=>
            <WebsiteCard key={p.id} title={p.title} techStack={p.techStack} description={p.description} websiteLink={p.websiteLink}/>)
        return (  
            <div className="container">
                <div>
                <h1>Yachna Rana</h1>
                </div>
                <div className="webpage-card-container">
                    {projects}
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default Webpage;