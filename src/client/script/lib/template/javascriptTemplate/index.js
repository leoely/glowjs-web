import React from 'react';
import style from './index.module.css';

export default function javascriptTemplate(e) {
  const { type, elem, } = e;
  switch (type) {
    case ' ':
      return <span> </span>;
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
