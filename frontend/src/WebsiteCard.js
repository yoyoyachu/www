import React, {Component } from 'react';
import './websitecard.css'
class WebsiteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="website-card-container">               
                <div className="website-card card">
                    <div className="card-header">{this.props.title}</div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.techStack}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.websiteLink} className="btn btn-primary">Visit Website</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WebsiteCard;