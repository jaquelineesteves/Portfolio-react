import { Link, useLocation } from 'react-router-dom';
import './styles/style.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs justify-content-end  ">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          <i class="fa-solid fa-user"> /</i>
          About me 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <i class="fa-solid fa-briefcase"> /</i>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          <i class="fa-solid fa-envelope">  /</i>
          Contact
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          to="/Resume"
         
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          <i class="fa-regular fa-file"> /</i>
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
