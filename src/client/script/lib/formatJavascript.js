import { HighLight, JavascriptLexer, } from 'glow.js';
import javascriptTemplate from '~/client/script/lib/template/javascriptTemplate';

export default function formatLocation(version) {
  const highLight = new HighLight();
  highLight.addLexer(JavascriptLexer);
  return highLight.parse(version).map((e) => javascriptTemplate(e));
}
