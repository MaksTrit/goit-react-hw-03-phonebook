import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addContact = newContact => {
    const addingName = newContact.name.toLowerCase();
    this.state.contacts.some(contact =>
      contact.name.toLowerCase().includes(addingName)
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  searchContact = () => {
    const { filter, contacts } = this.state;
    const searchName = filter.toLowerCase();
    const searchedContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchName)
    );
    return searchedContacts.sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    const { filter } = this.state;
    const contactsList = this.searchContact();
    return (
      <Layout>
        <GlobalStyle />
        <ContactForm onSubmit={this.addContact} />
        <Filter onChange={this.handleChange} value={filter} />
        <ContactsList contacts={contactsList} onDelete={this.deleteContact} />
      </Layout>
    );
  }
}
