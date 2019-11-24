import React from 'react';
import './table.css';

export const Table = ({data, setSort}) => (
<table className="table">
  <thead>
    <tr>
      <th>
      <button onClick={() => setSort("name")}>Name</button>
      </th>
      <th>
      <button onClick={() => setSort("date")}>Date</button>
      </th>
      <th>
      <button onClick={() => setSort("count")}>Count</button>
      </th>
    </tr>
  </thead>
  <tbody>
    {data.map(t =>(
      <tr key={t.id}>
        <td>{t.name}</td>
        <td>{t.date}</td>
        <td>{t.count}</td>
      </tr>
            ))}
        </tbody>
</table>
)