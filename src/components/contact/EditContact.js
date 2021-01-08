import React, { Component } from 'react'

import TextInputGroup from '../layout/TextInputGroup';
import Axios from 'axios';
import {connect} from 'react-redux';

class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    componentDidMount =  async () => {
        
            
        const {id} = this.props.match.params;

       const res = await Axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        
            this.setState({
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone
            });
        
        
    };

    

    ChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitHandler = async (e) => {
        e.preventDefault();
        const {id} = this.props.match.params;
        const {name,email,phone} = this.state;

        if (name === '')
        {
            this.setState({
                errors: { name: 'Name is Required'}
            });
            return ;
        }
        
        if (phone === '')
        {
            this.setState({
                errors: { phone: 'Phone is Required'}
            });
            return ;
        }
        if (email === '')
        {
            this.setState({
                errors: { email: 'Email is Required'}
            });
            return ;
        }

        const updatedContact = {
            id,
            name,
            phone,
            email
        };

        
        // await Axios.put('https://jsonplaceholder.typicode.com/users/' + id,{name,phone,email})
         this.props.updateContact(id,updatedContact);
    
        this.props.history.push('/');
        
    }
    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                    <form onSubmit={this.submitHandler}>
                        <TextInputGroup label="Name"  name="name"  value={this.state.name} placeholder="Enter Name" type="text" onChange={this.ChangeHandler} error={this.state.errors.name} />
                        <TextInputGroup label="Phone"  name="phone"  value={this.state.phone} placeholder="Enter Phone" type="text" onChange={this.ChangeHandler}  error={this.state.errors.phone} />
                        <TextInputGroup label="Email"  name="email"  value={this.state.email} placeholder="Enter Email" type="email" onChange={this.ChangeHandler}  error={this.state.errors.email} /> 
                        
                        <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state,ownprops) => {

    return {
        contacts: state.contacts.find(Contact => Contact.id === ownprops.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        updateContact: (id,data) => dispatch({type: 'UPDATE_CONTACT', data: data,id: id}),

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(EditContact);
