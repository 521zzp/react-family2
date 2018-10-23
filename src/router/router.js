import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=Home!@/component/page/Home'
import Page1 from 'bundle-loader?lazy&name=Page1!@/component/page/Page1'
import Counter from 'bundle-loader?lazy&name=Counter!@/component/page/Counter'
import UserInfo from 'bundle-loader?lazy&name=UserInfo!@/component/page/UserInfo'

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
    </Switch>
  </BrowserRouter>

)

export default GetRouter
/*

import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=Home!@/component/page/Home'
import Page1 from 'bundle-loader?lazy&name=Page1!@/component/page/Page1'
import Counter from 'bundle-loader?lazy&name=Counter!@/component/page/Counter'
import UserInfo from 'bundle-loader?lazy&name=UserInfo!@/component/page/UserInfo'

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
      </Switch>
  </BrowserRouter>

)

export default GetRouter



* */

/*
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


import Home from '@/component/page/Home'
import Page1 from '@/component/page/Page1'
import Counter from '@/component/page/Counter'
import UserInfo from '@/component/page/UserInfo'

const GetRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route path='/page1' component={ Page1 }></Route>
        <Route path='/counter' component={ Counter }></Route>
        <Route path='/userInfo' component={ UserInfo }></Route>
      </Switch>
  </BrowserRouter>

)

export default GetRouter


* */
