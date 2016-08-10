import React from 'react';
export default class Heading extends React.Component {
  render() {
    return (
      <div className="heading">
        <div className="site-logo"><img src="img/logo.png" alt="logo"/></div>
        <div className="user-menu">Admin Name</div>
      </div>
    );
  }
}