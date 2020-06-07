import React,{Component} from 'react'
import propTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faSortDown, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {

    state = {

        showControl: false
    }

    showClickHandler = () => {
        const cntrl = this.state.showControl;
        this.setState({showControl: !cntrl});
    };

    deleteContactHandler = () => {
        this.props.delete();
    }


    render(){
        const {id,name,email,phone} = this.props;
        return (
            <div className="card card-body mb-3">
                <h3>{name}  < FontAwesomeIcon onClick={this.showClickHandler} icon={faSortDown} 
                style={{cursor: 'pointer'}}/>
                < FontAwesomeIcon icon={faTimes} style={{color: 'red',float: 'right',cursor: 'pointer'}} onClick={this.deleteContactHandler}/>
                <Link to={'/contact/edit/'+ id} >
                < FontAwesomeIcon icon={faPencilAlt} style={{color: 'black',float: 'right',marginRight: '1rem'}} /></Link>
                 </h3>
                
                {this.state.showControl ? (
                    <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item"> Phone: {phone}</li>
                </ul>
                ) : null}
                
            </div>
        );
    }

    
    
};

Contact.propTypes = {
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
}

export default Contact;
