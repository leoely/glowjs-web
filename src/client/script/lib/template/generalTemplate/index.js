import React from 'react';
import style from './index.module.css';

export default function locationTemplate(e) {
  const { type, elem, } = e;
  console.log(e);
  switch (type) {
    case ' ':
      return <span> </span>;
    case 'colon':
      return <span className={style.colon}>:</span>;
    case 'dot':
      return <span className={style.dot}>.</span>;
    case 'slash':
      return <span className={style.slash}>/</span>;
    case 'command':
    case 'filename':
    case 'suffix':
    case 'namespace':
      return <span className={style.namespace}>{elem}</span>;
    case 'option':
      return <span className={style.option}>{elem}</span>;
    case 'or':
      return <span className={style.or}>{elem}</span>;
    case 'centerLine':
      return <span className={style.centerLine}>{elem}</span>;
    case 'identifer':
      return <span className={style.identifer}>{elem}</span>
    case 'parenthese':
      return <span className={style.parenthese}>{elem}</span>
    case 'call':
      return <span className={style.call}>{elem}</span>
    case 'module':
      return <span className={style.module}>{elem}</span>
    case 'curlyParenthese':
      return <span className={style.curlyParenthese}>{elem}</span>
    case 'quotation':
    case 'string':
      return <span className={style.string}>{elem}</span>
    case 'iteral':
      return <span className={style.iteral}>{elem}</span>
    case 'function':
      return <span className={style.function}>{elem}</span>
    case 'arithmetic':
      return <span className={style.arithmetic}>{elem}</span>
    case 'declare':
      return <span className={style.declare}>{elem}</span>
    case 'class':
      return <span className={style.class}>{elem}</span>
  }
}
