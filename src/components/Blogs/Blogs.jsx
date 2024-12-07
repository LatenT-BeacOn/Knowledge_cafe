import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookMarks,markAsRead}) => {
    const [Blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));

    },[]);
    return (
        <div className="w-2/3 items-center">
            {
                Blogs.map(blog=><Blog 
                    key={Blogs.id}
                    blog={blog}
                    markAsRead={markAsRead}
                    handleBookMarks={handleBookMarks}
                    ></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes={
    handleBookMarks:PropTypes.func,
    markAsRead:PropTypes.func
}

export default Blogs;