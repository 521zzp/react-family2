import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


import Home from '@/component/page/Home'
import Page1 from '@/component/page/Page1'
import Counter from '@/component/page/Counter'

const GetRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route path='/page1' component={ Page1 }></Route>
        <Route path='/counter' component={ Counter }></Route>
      </Switch>
  </BrowserRouter>

)

export default GetRouter
