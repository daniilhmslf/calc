import React from 'react';
import './styles.css';

class Frame extends React.Component{
  render() {
    return (
      <div className='frame'>
        {this.props.children}
      </div>
    );
  }
}

export default Frame;