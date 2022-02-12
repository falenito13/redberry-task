import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import Route from './routes/Index'
import "react-datepicker/dist/react-datepicker.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'
function App() {

    return (
        <Route />
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
}
