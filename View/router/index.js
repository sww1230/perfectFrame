import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import {
  Provider
} from 'react-redux'
import {
  Router,
  Route,
  IndexLink,
  browserHistory,
  hashHistory,
  Link,
  IndexRoute
} from 'react-router'
import {
  syncHistoryWithStore,
  routerReducer
} from 'react-router-redux'
import store from '../Reducers'

//引入页面 ContainerPage文件目录下的文件
import NoMatch from '../ContainerPage/error'
import Index from '../ContainerPage'

//开发人员在此引入自己负责的模块, 添加路由在IndexRoute下边追回
//李燚 



//许可



//继成



const history = syncHistoryWithStore(hashHistory, store)
const createHashHistory = require('history/lib/createHashHistory')


history.listen(function(location) {
  // console.log(location.pathname);
});

class RouterConfig extends React.Component {
  render() {
    var urlJson = localStorage.menuAuth ? JSON.parse(localStorage.menuAuth) : {};
    return (
      <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Index}>

            </Route>
            <Route path="*" component={NoMatch}/>
          </Router>
        </Provider>
    )
  }
}

module.exports = RouterConfig