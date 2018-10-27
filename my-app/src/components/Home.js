import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import employees from './utils/employee'

import '../App.css';
import fire from '../config/fire';

export class Home extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
    console.log(this.props)
  return (
    <div className="wrapper">
      <Nav  onClick={this.logout}/>
    <h2>Employee List</h2>
    <div className="employee-list-div">
      {employees.map((item,i) => <div className="" key={i}><Link className="employee-list" to={`/purpose/${item.id}`}>{item.name}</Link></div>)}
    </div>
   </div>
    )
  }
}
                            