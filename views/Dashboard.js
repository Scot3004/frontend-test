import React from 'react';
import Navigate from '../components/Navigate';
import Heading from '../components/Heading';

export default React.createClass({
  render() {
    return <div className="r-dashboard">
    <Heading></Heading>
	<Navigate></Navigate>

    Dashboard
    </div>
  }
});