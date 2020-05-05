import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(){
  	super()
  	this.state = {
  		displayName: '',
      email: '',
  		password: '',
      confirmPassword: ''
  	}
  }

  handleSubmit = async (event) => {
  	event.preventDefault();

    const { email, password, confirmPassword, displayName } = this.state
  	if(password !== confirmPassword) {
      alert("Password don't match")
      return;
    }

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password) // -> gives us userAuth object
      await createUserProfileDocument(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log('error creating new user', error.message)
    }
  }

  handleChange = (event) => { 
  	const { value, name } = event.target; // event.target.name = 'email'
  	this.setState({ [name]: value }) // in one function we handled all events
  }

  render() {
  	const { email, password, confirmPassword, displayName } = this.state
	  return (
	    <div className='sign-up'>
	     	<h2 className='title'>I do not have an account</h2>
	     	<span>Sign up with your email and password</span>

	     	<form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} label='Display Name' type='text' name='displayName' value={displayName} required/>
	     		<FormInput handleChange={this.handleChange} label='Email' type='email' name='email' value={email} required/>
	     		<FormInput handleChange={this.handleChange} label='Password' type='password' name='password' value={password} required/>
          <FormInput handleChange={this.handleChange} label='Confirm Password' type='password' name='confirmPassword' value={confirmPassword} required/>
          <div className='buttons'>
  	     		<CustomButton type='submit'>Sign Up</CustomButton>
          </div>
	     	</form>
	    </div>
	  );

  }
}

export default SignUp;