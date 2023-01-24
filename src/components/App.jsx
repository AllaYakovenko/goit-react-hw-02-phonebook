import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';

class App extends Component {

  formSubmitHandler = data => {
    console.log(data);
  };

render(){  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        <h2>Contacts</h2>
          {/* <Filter ... /> */}
          {/* <ContactList ... /> */}
      </div>
    </div>
  );
};
};  

export default App;
