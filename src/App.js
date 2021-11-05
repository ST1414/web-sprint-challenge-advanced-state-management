import React, { Component } from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { fetchSmurfs } from "./actions";

class App extends Component {

  componentDidMount = () => {
    this.props.fetchSmurfs();
    // this.props.dispatch(fetchSmurfs()); 
    // ^ Reference: If we didn't deconstruct in the connect, need to call dispatch too
  }

  render() {
    // console.log('AppJS: STATE', this.state) // <--- Ref: Null bc no local state
    // console.log('AppJS: PROPS', this.props) // <--- Ref: Comes from Connect
    
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.