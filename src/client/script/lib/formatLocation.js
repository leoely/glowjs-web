import { HighLight, JavascriptLexer, } from 'glow.js';
import locationTemplate from '~/client/script/lib/template/javascriptTemplate';

export default function formatLocation(version) {
  const highLight = new HighLight();
  highLight.addLexer(LocationLexer);
  return highLight.parse(version).map((e) => javascriptTemplate(e));
}
