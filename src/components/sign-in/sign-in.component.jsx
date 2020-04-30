import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {
  		email: '',
  		password: ''
  	}
  }

  handleSubmit = (event) => {
  	event.preventDefault();
  	this.setState({email: '', password: ''})
  }

  handleChange = (event) => { 
  	const { value, name } = event.target; // event.target.name = 'email'
  	this.setState({ [name]: value }) // in one function we handled both events
  }

  render() {
  	const { email, password } = this.state
	  return (
	    <div className='sign-in'>
	     	<h2>I already have an account</h2>
	     	<span>Sign in with your email and password</span>

	     	<form onSubmit={this.handleSubmit}>
	     		<FormInput handleChange={this.handleChange} label='email' type='email' name='email' value={email} required/>
	     		<FormInput handleChange={this.handleChange} label='password' type='password' name='password' value={password} required/>
          <div className='buttons'>
  	     		<CustomButton type='submit'>Sign In</CustomButton>
  	     		<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
	     	</form>
	    </div>
	  );

  }
}

export default SignIn;