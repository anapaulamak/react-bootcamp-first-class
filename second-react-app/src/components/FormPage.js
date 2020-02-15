import React, {Component} from 'react';
import { RegisterForm } from './RegisterForm';

export default class FormPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="Container">
        <label>Cadastro de Alunas</label>
        <RegisterForm />
      </div>
    )
  }
}