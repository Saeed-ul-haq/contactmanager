import React, { Component } from 'react'
import Contact from './Contact';
import Axios from 'axios';
import {connect} from 'react-redux'
import {getContact,deleteContact} from '../../store/actionTypes'


 class Contacts extends Component {

    state = {
        contacts: []
    };

     componentDidMount =  () => {
         console.log(this.props)
       this.props.ongetcontact();
    
        
    }
    

    deleteContactHandler = async  (id) => {


        await Axios.delete('https://jsonplaceholder.typicode.com/users/' + id);
        const newContact = this.state.contacts.filter((contact) => contact.id !== id);
         this.setState({contacts: newContact});
        

        
    }
    render() {

        let contactList = '';
        contactList = this.props.contacts.map((ctct) => {
           return (
            <Contact
            
            key={ctct.id} 
            id={ctct.id}
            name={ctct.name} 
            email={ctct.email} 
            phone={ctct.phone}
            delete={() => this.props.OnDeleteContact(ctct.id)}
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

const mapStateToProps = (state) => {

    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        OnDeleteContact: (id) => dispatch(deleteContact(id)),
        ongetcontact: () =>   getContact

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);
