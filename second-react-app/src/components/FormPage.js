import React, {Component} from 'react';
import { RegisterForm } from './RegisterForm';

export default class FormPage extends Component{
  render(){
    return(
      <div className="Container">
        <label>Cadastro de Alunas</label>
        <RegisterForm />
      </div>
    )
  }
}