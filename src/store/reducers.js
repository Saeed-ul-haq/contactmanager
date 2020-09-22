import {ADD_CONTACT, DELETE_CONTACT,UPDATE_CONTACT } from './actions';
const initialState  = {
    contacts: [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
       
        phone: "1-770-736-8031 ",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125"
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            
            phone: "1-463-123-4447",
            
          },
          {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            
            phone: "493-170-9623 x156",
            
          },
          {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
           
            phone: "(254)954-1289",
            
          },
          {
            id: 6,
            name: "Mrs. Dennis Schulist",
            username: "Leopoldo_Corkery",
            email: "Karley_Dach@jasper.info",
           
            phone: "1-477-935-8478 x6430",
           
          }]
}

const reducers = (state=initialState, action) => {
    switch(action.type){
        case ADD_CONTACT:
            return{
                ...state,
                contacts: state.contacts.concat(action.data)
            };
        case DELETE_CONTACT: 
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.id)
            };
        case UPDATE_CONTACT: 
            // state.contacts.find(con)
            const {data, id} = action;
            // console.log('the action data ', data, ' ', id )
            let index = state.contacts.findIndex(contact => contact.id == id)
            // console.log(state.contacts.findIndex(contact => contact.id == id));
            state.contacts[index] = {...action.data};
            const updatedcontacts = state.contacts.map(contact => {
                if(contact.id == action.id){
                    return{
                        ...contact,
                        data
                        
                    };
                }
                return contact;
                
            });

            console.log( state.contacts[index])
            
            return {
                ...state 
                
            };
        default:
            return state;
    }
}

export default reducers;