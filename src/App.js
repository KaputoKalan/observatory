import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/landing/HomePage/Home'
import IssueLog from './Pages/landing/IssueLog/IssueLog'
import './App.css'
import Form from './Pages/landing/Form/Form'
import Login from './Pages/landing/Login/Login'
import AdminDashboard from './Pages/landing/Admin/AdminDashboard'
import AddIssue from './Pages/landing/Admin/components/AddIssue'
import Sidebar from './Pages/landing/Sidebar/Sidebar'


const App = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('/post')
    .then(res => setPosts(res.data))
    .catch(err => console.log(err))
  })


  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/issuelog' exact component={IssueLog} />
        <Route path='/form' exact component={Form} />
        <Route path='/admin-login' exact component={Login} />
        <Route path='/addissue' exact component={AddIssue} />
        <Route path='/sidebar' exact component={Sidebar} />
        <Route path='/admin' exact render={() => <AdminDashboard posts={posts} />} />
      </Switch>
    </Router>
  )
}

export default App
