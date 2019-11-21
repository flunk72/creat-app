import React, {Component} from 'react';

import './App.css';

export class App extends Component {
  state = {
    goods: []
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
    
    render () {
      return (
      <div>
        <div className="sorting-block">
        Сортировать по:
          <button className="sorting-btn" onClick={() => this.sortBy('name')}>Имени</button>
          <button className="sorting-btn">Дате</button>
          <button className="sorting-btn">Количеству</button>
        </div>
        <div className="table">
          <div className="container">
            <div className="table-name">
              {this.state.goods.map(g =>
              <div key={g.id}>
              <span>{g.name}</span>
            </div>
            )}
            </div>
            <div className="table-date">
            {this.state.goods.map(g =>
            <div key={g.id}>
              <span>{g.date}</span>
            </div>
            )}
            </div>
            <div className="table-count">
            {this.state.goods.map(g =>
            <div key={g.id}>
              <span>{g.count}</span>
            </div>
            )}
            </div>
          </div>
        </div>
      </div>
      )
    }
}
