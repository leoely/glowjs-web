import React from 'react';
import style from './index.module.css';
import formatJavascript from '~/client/script/lib/formatJavascript';

class Format extends React.Component {
  render() {
    return (
      <div className={style.format}>
        {formatJavascript(this.props.children)}
      </div>
    );
  }
}

export default Format;
