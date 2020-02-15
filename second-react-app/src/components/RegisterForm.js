import React, { Component } from 'react';
import { InputForm } from './InputForm';
import { SubmitButton } from './SubmitButton';

export class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  render(){
    const labels = [ 
      {
        label: 'nome completo',
        type: 'text',
      },
      {
        label: 'cidade',
        type: 'text', 
      },
      {
        label: 'email',
        type: 'email',
        placeholder: 'email@email.com'
      },
      {
        label: 'cpf',
        type: 'number',
        placeholder: '000.000.000-00'
      }, 
      {
        label: 'telefone',
        type: 'number',
        placeholder: '(XX)XXXXX-XXXX'
      }, 
    ]
    return(
      <form>
        {labels.map((label, index) => {
          return(
            <InputForm 
            inputLabelText={label.label} type={label.type} placeholder={label.placeholder}/>
            )
          })
        }

        <SubmitButton buttonText="Inscrever"/>
      </form>
    )
  }
}