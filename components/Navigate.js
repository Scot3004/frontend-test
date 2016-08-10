import React from 'react';
import { Link } from 'react-router';
export default class Navigate extends React.Component {
  render() {
    return (
      <div className="navigate">
        <h2 className="navigate__heading">NAVIGATE</h2>
        <ul>
          <li><Link to="/dashboard">Analytics</Link></li>
          <li><Link to="/">News</Link></li>
          <li><a href='#'>Board Brief</a></li>
          <li><a href='#'>Board Brief</a></li>
          
        </ul>
      </div>
    );
  }
}