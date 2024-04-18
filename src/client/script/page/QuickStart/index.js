import React from 'react';
import Text from '~/client/script/component/Text';
import Format from '~/client/script/component/Format';
import style from './index.module.css';

class QuickStart extends React.Component {
  render() {
    return (
      <div>
        <Format>
        {"import { HighLight, JavascriptLexer, } from 'glow.js';"}
        </Format>
        <Format>
          const highLight = new HighLight();
        </Format>
        <Format>
          highLight.addLexer(JavascriptLexer);
        </Format>
        <Format>
          highLight.parse('os.cpus()');
        </Format>
        <Text>
          Import related dependencies 'HighLight' and 'JavascriptLexer' from glow.js.
        </Text>
        <Text>
          Instantiate 'HighLight' class, generate 'highLight' instance.
        </Text>
        <Text className={style.text}>
          Add related lexer.For example,add 'JavascriptLexer'.
        </Text>
        <Text>
          Use 'highLight' instance,parse javascript code.
        </Text>
      </div>
    );
  }
}

export default QuickStart;
