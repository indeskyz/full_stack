import React from 'react';
import axios from 'axios';
import API from './api';

export default class PersonList extends React.Component 
{
    //Define state default values
    state = {
        name: '',
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res.data);
            const persons = res.data;
            this.setState({ persons });
        })
    }

    //On Textbox value change event to read values for POST and DELETE
    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    //Save Button Event
    handleSaveSubmit = event => {
        event.preventDefault();

        //POST Request
        this.postDataToServer();
    
    }

    //Save Button Event
    handleDeleteSubmit = event => {
        event.preventDefault();

        //DELETE Request
        this.deleteDataFromServer();
    
    }

  //Send Data to Server Using POST request
  postDataToServer()
  {
    const user = {
        name: this.state.name
        };
    
        //POST request
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data.user);
            this.state.persons.push(res.data.name)
        })
  }

  deleteDataFromServer()
  {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.name}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

    /*
    API.delete(`users/${this.state.name}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    */

    /*
    const response = await API.delete(`users/${this.state.id}`);
    console.log(response);
    console.log(response.data);
    */
  }

  //Component Lifecycle Callback
  render() {
    return (
      <div>
          <h1>Users List</h1>
        <ul>
            { this.state.persons.map(person => <li>{person.name}</li>) }
        </ul>

        <h1>POST Record</h1>
        <form onSubmit={this.handleSaveSubmit}>
          <label>
            Enter Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>

        <h1>DELETE Record</h1>
        <div>
            <form onSubmit={this.handleDeleteSubmit}>
            <label>
                Enter Person ID:
                <input type="text" name="id" onChange={this.handleChange} />
            </label>
            <button type="submit">Delete</button>
            </form>
        </div>
     </div>
    )
  }
}