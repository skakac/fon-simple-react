import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './tailwind.output.css';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './compontents/Nav'
import Main from './Main';
import Contact from './Contact';
import Error from './Error';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Nav />
          <div className="lg:container lg:mx-auto">
              <Switch>
                  <Route path="/" component={Main} exact/>
                  <Route path="/contact" component={Contact}/>
                  <Route component={Error}/>
              </Switch>
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
