import React from 'react';
import Code from '~/client/script/component/Code';
import style from './index.module.css';

class QuickStart extends React.Component {
  render() {
    return (
      <div>
        <Code hl={['javascript']}>
          {"import { HighLight, JavascriptLexer, } from 'glow.js';"}
        </Code>
        <div className={style.text}>
          Import related dependencies 'highLight' and 'JavascriptLexer' from glow.js.
        </div>
        <Code hl={['javascript']}>
          const highLight = new HighLight();
        </Code>
        <div className={style.text}>
          Instantiate 'HighLight' class, generate 'highLight' instance.
        </div>
        <Code hl={['javascript']}>
          highLight.addLexer(JavascriptLexer);
        </Code>
        <div className={style.text}>
          Add related lexer.For example,add 'JavascriptLexer'.
        </div>
        <Code hl={['javascript']}>
          highLight.parse('os.cpus()');
        </Code>
        <div className={style.text}>
          Use 'highLight' instance,parse javascript code.
        </div>
      </div>
    );
  }
}

export default QuickStart;
