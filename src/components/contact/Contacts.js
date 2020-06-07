import React, { Component } from 'react'
import Contact from './Contact';
import Axios from 'axios';

 class Contacts extends Component {

    state = {
        contacts: []
    };

     componentDidMount = async () => {
      const res = await  Axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({
            contacts: res.data
        });
    }

    deleteContactHandler = async  (id) => {


        await Axios.delete('https://jsonplaceholder.typicode.com/users/' + id);
        const newContact = this.state.contacts.filter((contact) => contact.id !== id);
         this.setState({contacts: newContact});
        

        
    }
    render() {

        let contactList = '';
        contactList = this.state.contacts.map((ctct) => {
           return (
            <Contact
            key={ctct.id} 
            id={ctct.id}
            name={ctct.name} 
            email={ctct.email} 
            phone={ctct.phone}
            delete={() => this.deleteContactHandler(ctct.id)}
            />
           ) ;
        })
        return (
            <div>
                <h1 className="display-4 mb-2">
                    <span className="text-danger">Contact</span> List
                </h1>
                {contactList}
            </div>
        )
    }
}

export default Contacts;
