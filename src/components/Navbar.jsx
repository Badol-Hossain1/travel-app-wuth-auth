import { Link } from 'react-router'
import logo from '../../public/images/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <img className="w-20 bg-white" src={logo} alt="" />
          </div>
          <label className="input ml-6   input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search your Destination..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-center flex">
          <ul className="menu flex gap-8 menu-horizontal ">
            <li>
              <Link to="/news"> News</Link>
            </li>
            <li>
              <Link to="/destination"> Destination</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/login" className="btn">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
