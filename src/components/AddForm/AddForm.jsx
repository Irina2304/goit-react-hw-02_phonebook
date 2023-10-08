import { Component } from 'react';
import { StyledForm, StyledLabel, StyledBtm, StyledInput} from './AddForm.styled';

export class AddForm extends Component {
    
    state = {
        name: '',
        number: ''
    }

    onChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({
            [name]: value
        })
    }
    
    onSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render(){
     return (
        <StyledForm onSubmit={this.onSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            // pattern="[A-Za-z]{1,32}"
            value={this.state.name}
            onChange={this.onChange}
            required />
        </StyledLabel>
        <StyledLabel>
          tel.
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?[0-9\s\-\(\)]+"
            value={this.state.number}
            onChange={this.onChange}
            required />
        </StyledLabel>
        <StyledBtm type="submit">Add contact</StyledBtm>
      </StyledForm>
    )
}
}