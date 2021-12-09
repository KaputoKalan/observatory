import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Text from '../../../components/text'
import Card from '../../../components/card'
import Pagination from '../components/Pagination'



const Posts = ({posts}) => {
    const [isOpen, setIsOpen] = useState(false)
    
 
    const item = (isEven, title, content) => {
            return <div className={isEven ? `bg-gray-100 p-4 md:flex` : `bg-white p-4  md:flex`}>
                <div className={`md:w-2/5 flex-shrink-0`}>
                    <Text
                        type={`text-small`}
                        tailwind={`font-semibold`}>{title}</Text>
                </div>
                <div className={`contentWrapper`}>

                    <Text
                        type={`text-small`}
                        tailwind={`text-gray-900`}>{content}</Text>
                </div>
            </div>
    }

    

    

    
    return (
        <div>
            
            {posts.map((post, key) =>(
                 <div className='bg-gray-100 py-8 md:px-64 md:py-12'>

                    <Card
                        shadow
                        rounded
                        tailwind='w-full shadow-sm md:shadow-md md:rounded-lg'>
                        <div className='p-4 border-b border-gray-200'>
                            <Text
                                color
                                tailwind='font-bold text-gray-800'>Issue Log submissions</Text>
                            <Text
                                size
                                tailwind=' text-xs'
                                type='text-small'>Details of the issue log</Text>
                        </div>
        
        
                        {item(true, `Full name`,`${post.name}`)}
                        {item(false, `Contact`,`${post.phone}`)}
                        {item(true, `Location` ,`${post.location}`)}
                        {item(false, `Issue Description`,`${post.description}`)}
                        {item(false, `Images`,`${post.files}`)}
                        {item(false, `Time Stamp`,`${post.createdAt}`)}
        
                    </Card>
                    
        
             </div>
            ))}
          
        </div>
    )
}

export default Posts
