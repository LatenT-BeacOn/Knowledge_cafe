import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header'


function App() {
  const [bookmarks,setBookMarks]=useState([]);
  const [readingTime, setReadingTime]=useState(0);

  const handleBookMarks=blog =>{
    const newBookmark=[...bookmarks,blog];
    setBookMarks(newBookmark);
  }

  const markAsRead= (id,time) =>{
      setReadingTime(readingTime+time);
      // console.log('reading id',id); 
      const remainingBookMark=bookmarks.filter(bookmark=>bookmark.id!==id)
      setBookMarks(remainingBookMark);
  }


  return (
    <>
    <Header></Header>
   <div className='flex md:w-11/12 mx-auto p-6 gap-6'>
    <Blogs markAsRead={markAsRead} handleBookMarks={handleBookMarks}></Blogs>
  <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
   </div>
    </>
  )
}

export default App
