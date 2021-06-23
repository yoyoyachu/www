import React,{Component } from 'react';
import WebsiteCard  from './WebsiteCard';
import './webpage.css'


class Webpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
                <div>
                <h1>Yachna Rana</h1>
                </div>
                <div className="webpage-card-container">
                    <WebsiteCard  title="Yelp Camp" techStack="Node.js, Express.js, Heroku" description="Some quick example text to build on the card title and make up the bulk of the card's content." websiteLink="https://dry-depths-69632.herokuapp.com/"/>
                    <WebsiteCard title="Fardah Roshan Academy" techStack="Node.js, Express.js, Heroku" description="build on the card title and make up the bulk of the card's content." websiteLink="https://pure-stream-44932.herokuapp.com/"/>
                    <WebsiteCard title="Coin-flipper Game" techStack="Node.js, React.js, Heroku" description="Some quick example text to build on the card title and make up the bulk of the card's content." websiteLink="https://coin-flipper-game.herokuapp.com/"/>
                    <WebsiteCard title="Lottery Game" techStack="Node.js, React.js, Heroku" description="Some quick example text to build on the card title and make up the bulk of the card's content." websiteLink="https://simple-lottery-app.herokuapp.com/"/>
                    


                    
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}
 
export default Webpage;