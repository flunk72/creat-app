import React, {Component} from 'react';
import { Table } from '../Table';
import './App.css';

export class App extends Component {
  state = {
    goods: [],
    sortType: "default"
  }
  SORTS = {
    default: list => list,
    name: list =>list.sort(({name}, {name: nextName}) => name-nextName),
    date: list =>list.sort(({date}, {date: nextDate}) => date-nextDate),
    count: list =>list.sort(({ count }, { count: nextCount }) => count - nextCount)
  };
    componentDidMount() {
      fetch('http://localhost:3000/data.json')
        .then(response => response.json()) 
        .then(({ dataName }) => this.setState(() => ({
          goods: dataName,
            }
          ))
        )
    }
    setSort = sortType => {
      this.setState(() => ({
        sortType
      }));
    };
  
    
  render() {
    const { sortType, goods } = this.state;
    const sortedUsers = this.SORTS[sortType](goods);
    return (
      <div className="container">
        <Table data={sortedUsers} setSort={this.setSort} />
        </div>
        )
    }
}