import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import fire from '../config/fire';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errMsg: ''
    }
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async login(e) {
    e.preventDefault();
    try {
      const user = await fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
      if(error){
        let {code} = error;
        this.setState({
          errMsg: code
        })
      }
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {

    console.log(this.props)
  return (
      <form className="form-signin">
        <img className="mb-4" src={logo} alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          {(this.state.errMsg) ? <div className='alert alert-danger' role="alert">{this.state.errMsg}</div>: <span></span>}
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input 
            type="email" 
            name="email" value={this.state.email}
            id="inputEmail" 
            className="form-control" 
            placeholder="Email address" 
            required 
            onChange={this.handleChange}
            autoFocus
          />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" 
              name="password"
              id="inputPassword" 
              value={this.state.password}
              className="form-control" 
              placeholder="Password" 
              onChange={this.handleChange}
              required
            />
              <div className="checkbox mb-3">
                <p>
                  Don't have an account <Link to="/signup">Sign up</Link>
                </p>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>Sign in</button>
          </form>
    )
  }
}

export default withRouter(Signin)
                            