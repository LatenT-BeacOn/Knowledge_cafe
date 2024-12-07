import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header'


function App() {
  const [bookmarks,setBookMarks]=useState([]);

  const handleBookMarks=blog =>{
    const newBookmark=[...bookmarks,blog];
    setBookMarks(newBookmark);
  }


  return (
    <>
    <Header></Header>
   <div className='flex md:w-11/12 mx-auto p-6 gap-6'>
    <Blogs handleBookMarks={handleBookMarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
   </div>
    </>
  )
}

export default App
