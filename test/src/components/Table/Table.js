import React from 'react';
import './table.css';

export const Table = ({data}) => (
  
<table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Date</th>
      <th>Count</th>
    </tr>
  </thead>
  <tbody>
    {this.state.data.map(t =>(
      <tr key={t.id}>
        <td>{t.name}</td>
        <td>{t.date}</td>
        <td>{t.count}</td>
      </tr>
            ))}
        </tbody>
</table>
)