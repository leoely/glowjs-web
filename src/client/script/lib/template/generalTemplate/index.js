import React from 'react';
import style from './index.module.css';

export default function locationTemplate(e) {
  console.log(e);
  const { type, elem, } = e;
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
  }
}
