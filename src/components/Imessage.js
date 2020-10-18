import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'


const Imessage = () => {
    
    return (
        <div className='sm:flex sm:flex-col md:flex-row '>
            
            {/* Holds the two components */}
            {/* Sidebar */}
            <Sidebar />
            {/* Chat */}
            <Chat />
        </div>
    )
}

export default Imessage
