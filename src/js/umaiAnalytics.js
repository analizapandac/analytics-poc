import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const timestamp = Date.now();
const elementId = `umaiAnalyticsElement-${timestamp}`;
let element = document.createElement('div')
element.setAttribute('id', elementId);
document.body.appendChild(element);

ReactDOM.render(<App timestamp={Date.now()} modalIsOpen={true} />, document.getElementById(elementId))