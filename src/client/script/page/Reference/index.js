import React from 'react';
import Format from '~/client/script/component/Format';
import Text from '~/client/script/component/Text';
import style from './index.module.css';

class Reference extends React.Component {
  render() {
    return (
      <div className={style.reference}>
        <Format>
          {"import { HighLight, ShellLexer, } from 'glow.js';"}
        </Format>
        <Format>
          const highLight = new HighLight();
        </Format>
        <Format>
          highLight.addLexer(ShellLexer);
        </Format>
        <Format>
          highLight.parse('fulmination parse test.ctf');
        </Format>
        <Text>
          Class "HighLight" can add special lexer and parse text which need to
          colorful.
        </Text>
        <Format>
          {"import { JavascriptLexer, } from 'glow.js';"}
        </Format>
        <Text>
          Class 'JavascriptLexer' can parse javascript program which need to
          colorful.
        </Text>
        <Format>
          {"import { LocationLexer, } from 'glow.js';"}
        </Format>
        <Text>
          Class 'JavascriptLexer' can parse location context which need to
          colorful.
        </Text>
        <Format>
          {"import { ShellLexer, } from 'glow.js';"}
        </Format>
        <Text>
          Class 'ShellLexer' can parse shell program which need to
          colorful.
        </Text>
        <Format>
          {"import { VersionLexer, } from 'glow.js';"}
        </Format>
        <Text>
          Class 'Version' can parse version context which need to
          colorful.
        </Text>
        <Format>
          {"import { YamlLexer, } from 'glow.js';"}
        </Format>
        <Text>
          Class 'YamlLexer' can parse yaml configuration which need to
          colorful.
        </Text>
        <Format>
          {"import { CtfLexer, } from 'glow.js';"}
        </Format>
        <Text>
          Class 'YamlLexer' can parse ctf context which need to
          colorful.
        </Text>
        <Format>
          {"import { HighLight, LocationLexer, ShellLexer, } from 'glow.js';"}
        </Format>
        <Format>
          const highLight = new HighLight();
        </Format>
        <Format>
          highLight.addLexer(LocationLexer);
        </Format>
        <Format>
          highLight.addLexer(ShellLexer);
        </Format>
        <Format>
          highLight.parse('curl http://drip.org.cn:3004/file/install.js -d "" | node -');
        </Format>
        <Text>
          Class 'HighLight' can add multiply lexer,base add order parser context
          together.
        </Text>
      </div>
    );
  }
}

export default Reference;
