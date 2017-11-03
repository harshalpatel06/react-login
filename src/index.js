import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'
// import { Provider } from "react-redux";
// import { store } from "./store.js";
// import { router } from "./router.js";

console.log('test log');

// render the main component
ReactDOM.render(
	<App />,	document.getElementById('app')
);
