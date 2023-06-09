import React from 'react';
import './App.css';
import { Brand, CTA, NavBar } from './components';
import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatGPT3,
} from './containers';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
                <Brand />
            </div>
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
