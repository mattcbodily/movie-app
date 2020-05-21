import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import FandomDash from './Components/FandomDash/FandomDash';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='fandom/:id' component={FandomDash}/>
    </Switch>
);