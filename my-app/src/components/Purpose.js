import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Purpose extends Component {
    constructor(props){
        super(props);
        this.state = {
            textarea: '',
            errMsg: ''
        }
        this.onSubmit = this.onSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this);
    }
onSubmit(e) {
        e.preventDefault();
        if(this.state.textarea !== '') {
            this.props.history.push("/emailSent");
        } else {
            this.setState({
                errMsg: 'Please write your purpose for meeting!'
            })
        }
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
      }
    render(){
        return(
            <div className="wrapper">
                {(this.state.errMsg) ? <div className='alert alert-danger alert-fix' role="alert">{this.state.errMsg}</div>: <span></span>}
            <p className="purpose">Purpose Of Visit</p>
            <form className="purpose-cont">
                <textarea rows='6' cols='80' name="textarea" form='usrform' placeholder="Enter your purpose for visit here.." required onChange={this.handleChange}
                 value={this.state.textarea}/>
                <button className="btn btn-lg btn-success btn-block signin-btn" onClick={this.onSubmit}>Submit</button>
            </form>
                
            </div>
        );
    }
   
}

export default withRouter(Purpose);