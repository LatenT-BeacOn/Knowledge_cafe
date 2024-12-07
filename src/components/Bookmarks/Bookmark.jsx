import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {cover_title}=bookmark;
    return (
        <div className='bg-slate-400 rounded-xl p-4 m-4' >
            <h3 className='text-2xl text-cent'>{cover_title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;