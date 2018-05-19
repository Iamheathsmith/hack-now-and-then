import '../style/base/_reset.scss';
import '../style/main.scss';

import React from 'react';
import Content from '../component/content/index';
import * as routes from './routes';
import ExerciseBO from '../component/exerciseBreakout/index';
import Profile from '../component/profile/index';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';


export default class App extends React.Component {

  render() {
    return (
      <main className="application">
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Content}/>
            <Route exact path={routes.EXERCISEBO} component={ExerciseBO} />
            <Route exact path={routes.PROFILE} component={Profile} />
          </React.Fragment>
        </BrowserRouter>
      </main>
    );
  }
}
