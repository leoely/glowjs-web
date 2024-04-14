import React from 'react';
import style from './index.module.css';

class Text extends React.Component {
  render() {
    return (
      <div className={style.text}>
        {this.props.children}
      </div>
    );
  }
}

export default Text;
