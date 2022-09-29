import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'
import './index.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = React.lazy(() => import('./container'));
//const Bundles = React.lazy(() => import('./container/bundles'));
//const Starters = React.lazy(() => import('./container/starters'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" component={TheContent} />
            {/* <Route exact path="/#components-bundles" component={Bundles} />
            <Route exact path="/#components-starters" component={Starters}/> */}
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
