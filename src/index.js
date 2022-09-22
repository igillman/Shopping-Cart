import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import ThemeContext from './context';

function Main(){
    const [mainId, setMainId] = useState('')
    const [secondId, setSecondId] = useState('');
    return(
        <BrowserRouter>
            <ThemeContext.Provider value={{mainId, setMainId, secondId, setSecondId}}>
                <App store = {store}/>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main/>
);

