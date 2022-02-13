import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, useParams} from "react-router-dom";
import Route from './Routes/Index'
import './i18n';

function App() {
    return (
        <Route/>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
}
