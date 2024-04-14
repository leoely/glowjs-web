import React from 'react';
import {
  HighLight,
  JavascriptLexer,
  ShellLexer,
  LocationLexer,
} from 'glow.js';
import generalTemplate from '~/client/script/lib/template/generalTemplate';
import style from './index.module.css';

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.highLight = new HighLight();
    const { highLight, } = this;
    this.props.hl.map((hl) => {
      switch (hl) {
        case 'javascript':
          highLight.addLexer(JavascriptLexer);
          break;
        case 'shell':
          highLight.addLexer(ShellLexer);
          break;
        case 'location':
          highLight.addLexer(LocationLexer);
          break;
      }
    });
  }

  render() {
    const { highLight, } = this;
    return (
      <div className={style.code}>
        {highLight.parse(this.props.children).map((e) => generalTemplate(e))}
      </div>
    );
  }
}

export default Code;
