import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {

    return (
        <div className="bg-slate-300 p-11 rounded-xl">
            <h3>spent time on read :{readingTime}</h3>
            <h3>Bookmarks:{bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,indx) => <Bookmark 
                key={indx}
               bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;