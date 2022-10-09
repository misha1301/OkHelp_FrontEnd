import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<App />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
    //ReactDOM.render(<App />, document.getElementById('root'))
);

