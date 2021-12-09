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

  const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)

    useEffect(()=>{
        const fetchPosts = async () => {
          setLoading(true)
          const res = await axios.get('/post')
          setPosts(res.data)
          setLoading(false)
        }

        fetchPosts()
    },[])


    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


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
        <Route path='/admin' render={() => <AdminDashboard posts={currentPosts} loading={loading} postsPerPage={postsPerPage} totalPosts={posts.length} />} />
      </Switch>
    </Router>
  )
  
}

export default App
