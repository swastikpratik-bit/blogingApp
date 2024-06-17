
import { Link } from 'react-router-dom';
import { Avatar } from './BlogCard';
 // Assuming you have an Avatar component

export const AppBar = () => {
  return (
    <div className="border-b border-slate-500 flex justify-between px-8 h-16 py-2 sticky top-0 bg-white z-50">
      <Link to={'/'}>
        <div className="text-2xl pt-2">
          Medium
        </div>
      </Link>
      
      <div className="flex items-center">
        <Link to={'/publish'}>
          <button
            type="button"
            className="mr-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            + Publish
          </button>
        </Link>
        <Avatar name={"A"} ww={"12"} hh={"12"} />
      </div>
    </div>
  );
};
