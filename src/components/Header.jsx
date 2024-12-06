import Profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between m-4 p-4 border-b-2 w-11/12 mx-auto'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;