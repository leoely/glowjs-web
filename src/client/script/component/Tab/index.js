import React from 'react';
import style from './index.module.css';

class Tab extends React.Component {
  render() {
    return (
      <ul className={style.tab}>
        <li className={style.item}>
          <i className={[style.icon, style.home].join(' ')}></i>
          Home
        </li>
        <li className={style.item}>
          <i className={[style.icon, style.quickstart].join(' ')}></i>
          Quick start
        </li>
        <li className={style.item}>
          <i className={[style.icon, style.reference].join(' ')}></i>
          Reference
        </li>
      </ul>
    );
  }
}

export default Tab;
