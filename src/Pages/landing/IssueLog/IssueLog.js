import React, { Fragment, useState, useEffect }from 'react'
import axios from 'axios'
import Table from '../Table'
import Navbar from '../Navbar'
import Footer from '../footer'
import Sidebar from '../Sidebar/Sidebar'




const IssueLog = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    axios.get('/addissue')
    .then(res => setPosts(res.data))
    .catch(err => console.log(err))
})

const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}
    return (
        <Fragment>  
            <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} />
           <Table 
                tableData={posts}
                headingColumns={['Issue', 'Institution', 'District/Province' , 'Date', 'Status']}
                title='Issue Log'
           />
           <Footer 
            facebook=''
            twitter=''
            instagram=''
           />
        </Fragment>
    )
}

export default IssueLog
