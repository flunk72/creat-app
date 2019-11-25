import React, {Component} from 'react';
import { Table } from '../Table';
import './App.css';

const SORTS = {
  default: list => list,
  count: list =>list.sort((first, second) => first.count - second.count),
  name: list =>
    list.sort((first, second) => first.name.localeCompare(second.name)) // сравнение для русского алфавита
};
export class App extends Component {
  state = {
    goods: [],
    sortType: "default",
    isReversed: false
  }

  setSort = newSortType => {
    const { sortType: currentSortType, isReversed } = this.state;
    
    const isCurrentSort = currentSortType === newSortType; // проверяем установлен ли уже тот сорт который мы применяем
    const newIsReversed = isCurrentSort && !isReversed; // если кликаем по кнопке второй раз - сортировка остается таже, но нам нужно сделать ее в обратном направлении
    const sortType = isCurrentSort && isReversed ? "default" : newSortType; // клик по кнопке третий раз - сбрасывается в начальное состояние

  this.setState({
    sortType,
    isReversed: newIsReversed
    });
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
  
    
  render() {
    const { sortType, goods, isReversed } = this.state;
    const usersCopy = goods.slice(0); // Нужна копия потому что array.prototype.sort мутирует источник.
    const sortedUsers = SORTS[sortType](usersCopy); // выбираем из сортировок по ключу нужную и запускаем
    const reversedSortedUsers = isReversed
      ? sortedUsers.reverse()
      : sortedUsers; // реверс переворачивает массив с одной стороны в другую
    return (
      <div className="container">
        <Table data={reversedSortedUsers} setSort={this.setSort} />
        </div>
        )
    }
}