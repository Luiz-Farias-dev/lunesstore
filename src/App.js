import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './Components/Header/Header';

export default function App (){
    return( 
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles />
        </BrowserRouter>
    );
}