import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function Navbar({ title }) {
  return (
    <div className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none  px-2 mx-2'>
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
            <Link to='/author' className='btn btn-ghost btn-sm rounded-btn'>
              Author
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;