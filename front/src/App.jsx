import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'normalize.css';

import Header from './components/Header';
import Game from './screens/Game';
import Statistics from './screens/Statistics';

const App = () => {
    return (
        <>
            <Header />
            <Switch>>
                <Route exact path="/" render={() => <Game />} />
                <Route path="/statistics" render={() => <Statistics />} />
            </Switch>
        </>
    );
};

export default App;
