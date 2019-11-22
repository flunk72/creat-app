import React, {Component} from 'react';
import { Table } from '../Table';
import './App.css';

export class App extends Component {
  state = {
    goods: [],
    isName: false,
    isCount: false
  }
    componentDidMount() {
      fetch('http://localhost:3000/data.json')
        .then(response => response.json()) 
        .then(({ dataName }) => this.setState(() => ({
          goods: dataName,
            }
          ))
        )
    }

  render() {

    return (
      <div className="container">
      <Table data={this.state.goods}/>
      </div>
        )
    }
}