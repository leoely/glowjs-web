import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Router from '~/client/script/component/Router';
import global from '~/client/script/obj/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
global.router = <Router />;
root.render(<div style={{ height: '100%', }}>{global.router}</div>);
