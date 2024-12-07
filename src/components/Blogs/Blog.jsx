import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog,handleBookMarks}) => {
    const {id,cover,cover_title,author,author_image,posted_date,hash_code,reading_time}=blog;
    return (
        <div className="">
            {/* <h1>Blog (5):</h1> */}
            <img className='w-full h-[400px]' src={cover} alt={`cover picture of the tittle ${cover_title}`} />
            <div className='flex justify-between items-center p-4'>
                <div className='flex items-center gap-3 text-center'>
                    <img className='w-2/12' src={author_image} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p>{reading_time}</p>
                     <button onClick={()=>handleBookMarks(blog)}><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            
            <h1 className='text-4xl'>{cover_title}</h1>
            <p><a href="">#{hash_code}</a></p>
           
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
   handleBookMarks: PropTypes.func
}

export default Blog;