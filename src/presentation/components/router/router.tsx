import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login } from '../../pages'

import '@/presentation/styles/global.scss'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
