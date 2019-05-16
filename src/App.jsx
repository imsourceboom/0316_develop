import React, { Component } from 'react';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Contents from 'components/Contents';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Nav />
                <Contents />
            </>
        );
    }
}

export default App;
