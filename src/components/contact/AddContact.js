import React, { Component } from 'react'

import TextInputGroup from '../layout/TextInputGroup';
import Axios from 'axios';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    // nameChangeHandler = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     });
    // }

    // phoneChangeHandler = (e) => {
    //     this.setState({
    //         phone: e.target.value
    //     });
    // }

    ChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitHandler = (e) => {
        e.preventDefault();
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
        const newcontact = {
            name,
            
        }
        Axios.post('https://jsonplaceholder.typicode.com/users/'  )
        .then(res => console.log(res));
        console.log(this.state);
    }
    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.submitHandler}>
                        <TextInputGroup label="Name"  name="name"  value={this.state.name} placeholder="Enter Name" type="text" onChange={this.ChangeHandler} error={this.state.errors.name} />
                        <TextInputGroup label="Phone"  name="phone"  value={this.state.phone} placeholder="Enter Phone" type="text" onChange={this.ChangeHandler}  error={this.state.errors.phone}/>
                        <TextInputGroup label="Email"  name="email"  value={this.state.email} placeholder="Enter Email" type="email" onChange={this.ChangeHandler}  error={this.state.errors.email}/> 
                        
                        <input type="submit" className="btn btn-light btn-block" />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
