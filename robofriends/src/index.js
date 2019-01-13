import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render( < Hello greeting = { 'Hello ' + 'React Ninja' }
        use = { "Heloo Ana" }
        titleApp = {
            "i'm very excited about this"
        }
        / > , document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: http://bit.ly/CRA-PWA
        serviceWorker.unregister();