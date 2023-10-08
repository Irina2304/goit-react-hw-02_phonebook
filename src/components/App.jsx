import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
  

  onFormSubmit = (data) => {
  
    const contactsArr = this.state.contacts;
    contactsArr.map(item => {
      if (data.name === item.name) {
        return alert(`${data.name} is already in contacts` )
      } 
      return this.state.contacts
    })
    return this.onContactsAdd(data)
  }

  onContactsAdd = (data) => {
    data.id = nanoid();
  
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data ],
    }));
  }

  

  onClickDel = (delId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== delId)
    }))
  }


  onChangeFilter = (filterName) => {
    this.setState ({
      filter: filterName
    })
  }


  getVisibleItems = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item => {
      const nameFilter = filter.toLowerCase();
      const hasName = item.name.toLowerCase().includes(nameFilter);
      if (!filter) {
        return this.state.contacts;
      }
      return hasName;
    });
  };

  
  render() {
    const visibleItems = this.getVisibleItems();
    
    return (
      <div className='main-div'>
        <h1>Phonebook</h1>
        <AddForm onSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.onChangeFilter} />
        <ContactsList
          items={visibleItems}
          onClickDel = {this.onClickDel}
        />
      </div>
    );
  }
}