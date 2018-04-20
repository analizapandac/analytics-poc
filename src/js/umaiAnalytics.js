import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const timestamp = Date.now();
const elementId = `umaiAnalyticsElement-${timestamp}`;
let element = document.createElement('div')
element.setAttribute('id', elementId);

let umaiAnalytics = window.umaiAnalytics;

umaiAnalytics.showAnalytics = function() {
	if (window.umaiAnalytics.hasOwnProperty('SourceIsAnalyticsWebsite') && !umaiAnalytics.SourceIsAnalyticsWebsite) {
		let parentElement = document.getElementById(umaiAnalytics.appRenderParentElementId);
		parentElement.appendChild(element);
	} else {
		document.body.appendChild(element);
	}

	ReactDOM.render(<App timestamp={Date.now()} />, document.getElementById(elementId))
}