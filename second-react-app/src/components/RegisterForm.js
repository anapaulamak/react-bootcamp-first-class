import React, { Component } from 'react';
import { InputForm } from './InputForm';
import { SubmitButton } from './SubmitButton';

export class RegisterForm extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <form>
      <InputForm />
      <SubmitButton butt/>
    </form>
    )
  }
}