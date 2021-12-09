import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Text from '../../../components/text'
import Card from '../../../components/card'
import Footer from '../footer'
import { Link, history } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Pagination from '../components/Pagination'
import Posts from './Posts'
import axios from 'axios'


const AdminDashboard = ({history}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [posts, setPosts] = useState([])
 
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)
    
  

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  
  
    useEffect(()=>{
        const fetchPosts = async () => {
          const res = await axios.get('/post')
          setPosts(res.data)
        }
  
        fetchPosts()
    },[])

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if (!userInfo) {
          history.push("/");
        }
      }, [

        history,
      ]);
  
  
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  

    const paginate = ( pageNumber )=> setCurrentPage(pageNumber)

    
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} />
           <Posts posts={currentPosts} />
           <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={posts.length }
            paginate={paginate}
            />
            <Footer />
           
            
        </div>
    )
}

export default AdminDashboard
