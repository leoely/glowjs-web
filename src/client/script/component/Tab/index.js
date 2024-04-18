import React from 'react';
import style from './index.module.css';
import global from '~/client/script/obj/global';

const {
  emitter,
} = global;

function getInitActive() {
  switch (location.pathname) {
    case '/':
      return 0;
    case '/quickstart':
      return 1;
    case '/reference':
      return 2;
  }
}

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: getInitActive(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(active) {
    this.setState({
      active,
    });
    switch (active) {
      case 0:
        emitter.send('page/');
        break;
      case 1:
        emitter.send('page/quickstart');
        break;
      case 2:
        emitter.send('page/reference');
        break;
    }
  }

  render() {
    const { active, } = this.state;
    return (
      <ul className={style.tab}>
        <li
        className={[style.item, active == 0 ? style.active : null].join(' ')}
        onClick={(e) => this.handleClick(0)}
        >
          <i className={[style.icon, style.home].join(' ')}></i>
          Home
        </li>
        <li
        className={[style.item, active == 1 ? style.active : null].join(' ')}
        onClick={(e) => this.handleClick(1)}
        >
          <i className={[style.icon, style.quickstart].join(' ')}></i>
          Quick start
        </li>
        <li
        className={[style.item, active == 2 ? style.active : null].join(' ')}
        onClick={(e) => this.handleClick(2)}
        >
          <i className={[style.icon, style.reference].join(' ')}></i>
          Reference
        </li>
      </ul>
    );
  }
}

export default Tab;
