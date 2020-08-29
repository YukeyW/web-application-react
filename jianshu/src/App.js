import React, {Component,Fragment} from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Iconfont />
          <BrowserRouter>
            <div>
              <Header /> 
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/detail/:id' component={Detail}></Route>
              <Route exact path='/write' component={Write}></Route>
              <Route exact path='/login' component={Login}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
