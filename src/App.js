import React,{Component} from 'react';
import './App.css';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";


import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <HashRouter >
      <div className="App">
        <Header branding="Contact Manager" />
        
        <div className="container">

          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/contact/add" component={AddContact} />
            <Route path="/about" component={About} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route component={NotFound}/>
          </Switch>

      
        </div>

      </div>
      </HashRouter>
    );
  }
}

export default App;
