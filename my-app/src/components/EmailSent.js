import React, { Component } from 'react';
import fire from '../config/fire';
import Nav from './Nav'


class EmailSent extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
  logout() {
    fire.auth().signOut();
  }
  render(){
    return(
       <div className="wrapper">
          <Nav  onClick={this.logout}/>
            <div className="emailSent">
            <p>
             An email has been sent to the employee, you would be attended to in a bit
            </p>
            {/* <button className="btn btn-lg btn-success btn-block list-btn" onClick={this.logout}>Logout</button> */}
    
        </div>
       </div>
    )
  }
}

export default EmailSent;