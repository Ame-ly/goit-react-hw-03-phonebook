import React, { Component } from 'react';

import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    if (contacts) {
      this.setState({ contacts: contacts })
    }
    // console.log(contacts);
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    contacts.find(cont => cont.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const searchContact = contacts.filter(contact => contact.id !== id);
      return { contacts: searchContact };
    });
  };

  filterFind = evt => this.setState({ filter: evt.currentTarget.value });

  doItemToLowerCase = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterFind} />
        <ContactList
          contacts={this.doItemToLowerCase()}
          onClickDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
