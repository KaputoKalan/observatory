import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/landing/HomePage/Home'
import IssueLog from './Pages/landing/IssueLog/IssueLog'
import './App.css'
import Form from './Pages/landing/Form/Form'
import Login from './Pages/landing/Login/Login'
import AdminDashboard from './Pages/landing/Admin/AdminDashboard'
import AddIssue from './Pages/landing/Admin/components/AddIssue'
import Sidebar from './Pages/landing/Sidebar/Sidebar'
import Contact from './Pages/landing/Contact/Contact'



const App = () => {



  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/issuelog' exact component={IssueLog} />
        <Route path='/form' exact component={Form} />
        <Route path='/admin-login' exact component={Login} />
        <Route path='/addissue' exact component={AddIssue} />
        <Route path='/sidebar' exact component={Sidebar} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/admin' 
          component={({ history }) => (
            <AdminDashboard history={history}/>
          )}
        />
      </Switch>
    </Router>
  )
  
}

export default App
