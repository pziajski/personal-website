import React from 'react';
import './App.scss';
import { NavSideBar } from './components/NavSideBar/NavSideBar';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
    return (
        <div className="App">
            <NavSideBar />
            <HomePage />
        </div>
    );
}

export default App;
