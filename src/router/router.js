import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Bundle from './Bundle'
import asyncComponent from './AsyncComponent'

const Home = asyncComponent(() => import('../components/page/Home'))
const Page1 = asyncComponent(() => import('../components/page/Page1'))
const Counter = asyncComponent(() => import('../components/page/Counter'))
const UserInfo = asyncComponent(() => import('../components/page/UserInfo'))
const NotFound = asyncComponent(() => import('../components/page/NotFound'))

const Loading = () => <div>Loading...</div>

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
)


const GetRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Home }></Route>
      <Route path='/page1' component={ Page1 }></Route>
      <Route path='/counter' component={ Counter }></Route>
      <Route path='/userInfo' component={ UserInfo }></Route>
      <Route component={ NotFound }></Route>
    </Switch>
  </BrowserRouter>

)

export default GetRouter


/*import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=Home!@/components/page/Home'
import Page1 from 'bundle-loader?lazy&name=Page1!@/components/page/Page1'
import Counter from 'bundle-loader?lazy&name=Counter!@/components/page/Counter'
import UserInfo from 'bundle-loader?lazy&name=UserInfo!@/components/page/UserInfo'
import NotFound from 'bundle-loader?lazy&name=NotFound!@/components/page/NotFound'

const Loading = () => <div>Loading...</div>

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
)


const GetRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ createComponent(Home) }></Route>
      <Route path='/page1' component={ createComponent(Page1) }></Route>
      <Route path='/counter' component={ createComponent(Counter) }></Route>
      <Route path='/userInfo' component={ createComponent(UserInfo) }></Route>
      <Route component={ createComponent(NotFound) }></Route>
    </Switch>
  </BrowserRouter>

)

export default GetRouter*/
