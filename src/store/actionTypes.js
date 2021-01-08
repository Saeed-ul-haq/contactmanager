import {GET_CONTACT,ADD_CONTACT, DELETE_CONTACT,UPDATE_CONTACT} from './actions'
import Axios from 'axios';

export const getContact = () => async dispatch => {
   const res = await  Axios.get('https://jsonplaceholder.typicode.com/users');
   console.log('hiiii')
    dispatch ({
        type: GET_CONTACT,
        data: res.data
    });
}
export const deleteContact = id => {
    return{
        type: DELETE_CONTACT,
        id: id
    }
};

export const addContact = data => {
    return{
        type: ADD_CONTACT,
        data: data
    }
};

export const updateContact = (id,data) => {
    return{
        type: UPDATE_CONTACT,
        id: id,
        data: data
    }
};

