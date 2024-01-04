import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout/>
        </BrowserRouter>
    );
}

export default App;
